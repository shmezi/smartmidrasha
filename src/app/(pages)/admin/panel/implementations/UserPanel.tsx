import {BasePanel} from "@/app/(pages)/admin/panel/BasePanel";
import { Selectable} from "@/struct/Selectable";
import {SOLIDER_ICON} from "@/constants/icons";
import {fromUser, IUser, User} from "@/struct/schemas/data/User";
import {FormControl, MenuItem, Select, TextField} from "@mui/material";
import RegexField from "@/app/(pages)/admin/[[...slug]]/comps/RegexField";
import React from "react";
import {createUserAction} from "@/app/actions/userActions";
import {Gender} from "@/struct/schemas/data/Home";
import HomeSelector from "@/components/serverComps/HomeSelector";
import CommanderSelector from "@/components/serverComps/CommanderSelector";
import {Job} from "@/struct/Job";

export class UserPanel extends BasePanel {
    icon = SOLIDER_ICON
    id = "users"
    action = createUserAction
    dialogTitle = "יצירת משתמש"
    creationPane = <>

        <FormControl>
            <TextField name={"name"} required={true} sx={{margin: "1rem"}} label={"שם"}/>
        </FormControl>

       <FormControl>
           <Select label={"מין"} name={"gender"} defaultValue={Gender.FEMALE} sx={{margin: "1rem"}} variant={"outlined"}>
               <MenuItem value={Gender.FEMALE}>נקבה</MenuItem>
               <MenuItem value={Gender.MALE}>זכר</MenuItem>
           </Select>
       </FormControl>
        <RegexField formField={"id"} name={"מספר אישי"} limit={7} regex={"^[0-9]{7}$"} required={true}></RegexField>
        <RegexField formField={"phone"} name={"מספר טלפון"} limit={9} regex={"^[0-9]{9}$"} required={true}></RegexField>


        <FormControl>
            <Select name={"job"} defaultValue={Job.DEFAULT.id} sx={{margin: "1rem"}} variant={"outlined"}>
                <MenuItem value={Job.COMMANDER.id}>מפקד</MenuItem>
                <MenuItem value={Job.HOME_COMMANDER.id}>מפקד חדר</MenuItem>
                <MenuItem value={Job.DEFAULT.id}>חייל</MenuItem>
                <MenuItem value={Job.ADMIN.id}>מנהלן</MenuItem>
            </Select>
        </FormControl>
        <HomeSelector/>
        <CommanderSelector/>

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