'use client'
import {Box, Typography} from "@mui/material";
import NavBarButton from "@/components/nav/NavbarButton";
import SynagogueIcon from "@mui/icons-material/Synagogue";
import React from "react";

const Header = () => {

    return <Box
        bgcolor={"primary.main"}
        color={"primary.contrastText"}
        alignContent={"center"}
        alignItems={"center"}
        display={"flex"}
        width={"100%"}
    >


        <NavBarButton/>
        <Box alignItems={"center"}  width={"100%"} justifyContent={"center"} alignContent={"center"}
             display={"flex"}
             flexDirection={"row"}>
            <SynagogueIcon sx={{marginLeft: "0.3rem", fontSize:"xx-large", color: "primary.contrastText"}}/>
            <Typography color={"white"} fontSize={"xx-large"}>המדרשה החכמה</Typography>
        </Box>
    </Box>
}
export default Header