import {IHome} from "@/struct/schemas/data/Home"
import {FormControl, MenuItem, Select} from "@mui/material";
import React from "react";
import {User} from "@/struct/schemas/data/User";

const CommanderSelector = async () => {
    const commanders = (await User.find({jobs: {$all: ["COMMANDER"]}}))
    return <FormControl>
        <Select name={"commanderId"} sx={{margin: "1rem"}} variant={"outlined"}>
            {commanders.map((commander: IHome) => {
                return <MenuItem key={commander.id} value={commander.id}>{commander.icon} {commander.name} | {commander.id}</MenuItem>
            })}

        </Select>
    </FormControl>


}
export default CommanderSelector