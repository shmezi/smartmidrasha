import {Home, IHome} from "@/struct/schemas/data/Home"
import {FormControl, MenuItem, Select} from "@mui/material";
import React from "react";

const HomeSelector = async () => {
    const homes = (await Home.find())
    return <FormControl>
        <Select name={"homeId"} sx={{margin: "1rem"}} variant={"outlined"}>
            {homes.map((home: IHome) => {
                return <MenuItem key={home.id} value={home.id}>{home.icon} {home.name} | {home.id}</MenuItem>
            })}

        </Select>
    </FormControl>


}
export default HomeSelector