import {BasePanel} from "@/app/admin/panel/BasePanel";
import {fromUser, Selectable} from "@/struct/Selectable";
import {SOLIDER_ICON} from "@/const/icons";
import {IUser, Job, User} from "@/struct/impl/User";
import {InputLabel, MenuItem, Select, TextField} from "@mui/material";
import RegexField from "@/app/admin/[[...slug]]/comps/RegexField";
import React from "react";
import {createUserAction} from "@/app/actions/userActions";
import {Gender, Home} from "@/struct/impl/Home";
import HomeSelector from "@/app/serverComps/HomeSelector";

export class UserPanel extends BasePanel {
    icon = SOLIDER_ICON
    id = "users"
    action = createUserAction
    dialogTitle = "יצירת משתמש"
    creationPane = <>

        <TextField name={"name"} required={true} sx={{margin: "1rem"}} label={"שם"}/>

        <Select label={"מין"} name={"gender"} defaultValue={Gender.FEMALE} sx={{margin: "1rem"}} variant={"outlined"}>
            <MenuItem value={Gender.FEMALE}>נקבה</MenuItem>
            <MenuItem value={Gender.MALE}>זכר</MenuItem>
        </Select>
        <RegexField formField={"id"} name={"מספר אישי"} limit={7} regex={"^[0-9]{7}$"} required={true}></RegexField>
        <RegexField formField={"phone"} name={"מספר טלפון"} limit={9} regex={"^[0-9]{9}$"} required={true}></RegexField>


        <Select name={"job"} defaultValue={Job.default} sx={{margin: "1rem"}} variant={"outlined"}>
            <MenuItem value={Job.commander}>מפקד</MenuItem>
            <MenuItem value={Job.room_commander}>מפקד חדר</MenuItem>
            <MenuItem value={Job.default}>חייל</MenuItem>
            <MenuItem value={Job.admin}>מנהלן</MenuItem>
        </Select>
        <HomeSelector/>

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