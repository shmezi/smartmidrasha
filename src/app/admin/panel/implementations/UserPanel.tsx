import {BasePanel} from "@/app/admin/panel/BasePanel";
import {Selectable} from "@/struct/Selectable";
import {SOLIDER_ICON} from "@/constants/icons";
import {FormControl, MenuItem, Select, TextField} from "@mui/material";
import RegexField from "@/app/admin/[[...slug]]/comps/RegexField";
import React from "react";
import {createUserAction} from "@/actions/userActions";
import {Gender} from "@/struct/schemas/Home";
import HomeSelector from "@/components/serverComps/HomeSelector";
import CommanderSelector from "@/components/serverComps/CommanderSelector";
import {getHighestJob, Role} from "@/struct/Role";
import {headers} from "next/headers";
import {auth} from "../../../../../auth";
import {MidrashaUser} from "@/struct/MidrashaUser";

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
            <Select label={"מין"} name={"gender"} defaultValue={Gender.FEMALE} sx={{margin: "1rem"}}
                    variant={"outlined"}>
                <MenuItem value={Gender.FEMALE}>נקבה</MenuItem>
                <MenuItem value={Gender.MALE}>זכר</MenuItem>
            </Select>
        </FormControl>
        <RegexField formField={"phone"} name={"מספר טלפון"} limit={12} regex={"^972[0-9]{9}$"}
                    required={true}></RegexField>


        <FormControl>
            <Select name={"job"} defaultValue={Role.DEFAULT.id} sx={{margin: "1rem"}} variant={"outlined"}>
                <MenuItem value={Role.COMMANDER.id}>מפקד</MenuItem>
                <MenuItem value={Role.DUTY_OFFICER.id}>מפקד חדר</MenuItem>
                <MenuItem value={Role.DEFAULT.id}>חייל</MenuItem>
                <MenuItem value={Role.ADMIN.id}>מנהלן</MenuItem>
            </Select>
        </FormControl>
        <HomeSelector/>
        <CommanderSelector/>

    </>

    editPane = (selected: Selectable) => {
        // const user = selected as IUser
        // return <>
        //     <p>שם: {user.name}</p>
        //     <p>תפקידים: {user.jobs.join(", ")}</p>
        // </>
        return <></>
    }

    dataSource = async (): Promise<Selectable[]> => {

        // auth.api
        const users = (await auth.api.listUsers(
            {
                query: {

                    limit: 10,
                    offset: 0
                    ,
                },
                headers: await headers()
            },
        ))


        return users?.users?.map((user) => {
            const casted = user as MidrashaUser
            const roles = (casted.role?.split(",") ?? []).map(item => {
                return Role.fromString(item)
            })

            const v: Selectable = {
                icon: getHighestJob(roles)?.icon, id: casted.id, name: casted.name
            }
            return v
        })
    }

}