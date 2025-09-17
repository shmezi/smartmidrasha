import {FormControl, MenuItem, Select} from "@mui/material";
import React from "react";
import {auth} from "../../../auth";
import {headers} from "next/headers";
import {MidrashaUser} from "@/struct/MidrashaUser";

const CommanderSelector = async () => {

    const commanders = (await auth.api.listUsers(
        {
            query: {
                filterField: "role",
                filterValue: "commanderRole",
                filterOperator: "contains",
                limit: 10,
                offset: 0
                ,
            },
            headers: await headers()
        },
    )).users.map((user) => {
        return user as MidrashaUser
    })
    return <FormControl>
        <Select name={"commanderId"} sx={{margin: "1rem"}} variant={"outlined"}>
            {commanders.map((commander) => {
                return <MenuItem key={commander.id}
                                 value={commander.id}>{commander.name}</MenuItem>
            })}

        </Select>
    </FormControl>


}
export default CommanderSelector