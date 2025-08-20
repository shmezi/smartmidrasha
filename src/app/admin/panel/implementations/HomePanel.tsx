import {BasePanel} from "@/app/admin/panel/BasePanel";
import {fromUser, Selectable} from "@/struct/Selectable";
import {HOME_ICON} from "@/app/admin/[[...slug]]/comps/const/icons";
import {IUser, Job, User} from "@/struct/User";
import {MenuItem, Select, TextField} from "@mui/material";
import RegexField from "@/app/admin/[[...slug]]/comps/RegexField";
import React from "react";
import {createUserAction} from "@/app/actions/userActions";

export class HomePanel extends BasePanel {
    icon = HOME_ICON
    id = "homes"
    action = createUserAction
    dialogTitle = "יצירת משתמש"
    creationPane = <>
        <RegexField formField={"id"} limit={7} regex={"^[0-9]{7}$"} required={true}></RegexField>
        <TextField name={"name"} required={true} sx={{margin: "1rem"}} label={"שם"}/>

        <Select name={"job"} defaultValue={Job.default} sx={{margin: "1rem"}} variant={"outlined"}>
            <MenuItem value={Job.commander}>מפקד</MenuItem>
            <MenuItem value={Job.room_commander}>מפקד חדר</MenuItem>
            <MenuItem value={Job.default}>חייל</MenuItem>
            <MenuItem value={Job.admin}>מנהלן</MenuItem>
        </Select>


    </>

    editPane = (selected: Selectable) => {
        const user = selected as IUser
        return <>
            <p>שם: {user.name}</p>
            <p>מספר אישי: {user.id}</p>
            <p>תפקידים: {user.jobs.join(", ")}</p>

        </>
    }

    dataSource = async (): Promise<Selectable[]> => {
        return (await User.find()).map((user) => {
            return fromUser(user)
        })
    }

}