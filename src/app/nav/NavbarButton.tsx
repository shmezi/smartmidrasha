'use client'
import React, {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {Box, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {useRouter} from "next/navigation";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import NavBarItem from "@/app/nav/NavBarItem";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import {House, Person2} from "@mui/icons-material";

const NavBarButton = () => {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    return <>
        <Drawer open={open} anchor={"right"} onClose={() => {
            setOpen(false)
        }}>
            <Box margin={"0.3rem"} width={"45vw"}>
                <Typography fontSize={"x-large"} marginRight={"0.2rem"}>שלום חייל!</Typography>
                <List>
                    <NavBarItem text={"גישת מנהלן"} url={"/admin/users"}>
                        <AdminPanelSettingsIcon sx={{color: "red"}}/>
                    </NavBarItem>
                    <NavBarItem text={"מעבר דירות"} url={"/commander/homes/review"}>
                        <House sx={{color: "purple"}}/>
                    </NavBarItem>
                    <NavBarItem text={"החיילים שלי"} url={"/commander/homes/soliders"}>
                        <MilitaryTechIcon sx={{color: "orange"}}/>

                    </NavBarItem>


                </List>
            </Box>
        </Drawer>

        <MenuIcon sx={{marginRight: "1rem", fontSize: "xx-large"}} onClick={() => {
            setOpen(!open)
        }}/>

    </>
}
export default NavBarButton