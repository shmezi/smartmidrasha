import {Home, IHome} from "@/struct/impl/Home"
import {MenuItem, Select} from "@mui/material";
import React from "react";

const HomeSelector = async () => {
    const homes = (await Home.find())
    return <Select name={"homeId"} sx={{margin: "1rem"}} variant={"outlined"}>
        {homes.map((home: IHome) => {
            return <MenuItem value={home.id}>{home.icon} {home.name} | {home.id}</MenuItem>
        })}

    </Select>


}
export default HomeSelector