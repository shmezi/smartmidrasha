import {BasePanel} from "@/app/admin/panel/BasePanel";
import {fromHome, Selectable} from "@/struct/Selectable";
import {HOME_ICON} from "@/const/icons";
import {Job} from "@/struct/impl/User";
import {MenuItem, Select, TextField} from "@mui/material";
import RegexField from "@/app/admin/[[...slug]]/comps/RegexField";
import React from "react";
import {Gender, Home, IHome} from "@/struct/impl/Home";
import {createHomeAction} from "@/app/actions/homeActions";

export class HomePanel extends BasePanel {
    icon = HOME_ICON
    id = "homes"
    action = createHomeAction
    dialogTitle = "יצירת בית"
    creationPane = <>

        <RegexField formField={"id"} name={"בית: (איזור-מספר בית-מספר דירה"} limit={11}
                    regex={"^[a-z]{3}-[0-9]{3}-[0-9]{3}$"} required={true}></RegexField>
        <TextField name={"name"} required={true} sx={{margin: "1rem"}} label={"שם"}/>

        <Select name={"gender"} defaultValue={Gender.FEMALE} sx={{margin: "1rem"}} variant={"outlined"}>
            <MenuItem value={Gender.FEMALE}>נשים</MenuItem>
            <MenuItem value={Gender.MALE}>גברים </MenuItem>
        </Select>


    </>

    editPane = (selected: Selectable) => {
        const user = selected as IHome
        return <>
            <p>שם: {user.name}</p>
        </>
    }

    dataSource = async (): Promise<Selectable[]> => {
        return (await Home.find()).map((user) => {
            return fromHome(user)
        })
    }

}