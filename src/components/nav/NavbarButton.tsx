'use client'
import React, {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {Box, Drawer, List, Typography} from "@mui/material";
import {useRouter} from "next/navigation";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import NavBarItem from "@/components/nav/NavBarItem";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import {House} from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import {authClient} from "@/lib/client";
import {createAuthClient} from "better-auth/react";
import {timeOfDay} from "@/utils/utils";

const {useSession} = createAuthClient()

const NavBarButton = () => {
    const [open, setOpen] = useState(false)
    const session = useSession()


    return <>
        <Drawer open={open} anchor={"right"} onClose={() => {
            setOpen(false)
        }}>
            <Box margin={"0.3rem"} width={"45vw"}>
                <Typography fontSize={"x-large"}
                            marginRight={"0.2rem"}>{timeOfDay()},</Typography>
                <Typography fontSize={"x-large"}
                            marginRight={"0.2rem"}>{session?.data?.user.name}!</Typography>
                <List>
                    <NavBarItem text={"גישת מנהלן"} url={"/admin/users"}>
                        <AdminPanelSettingsIcon sx={{color: "red"}}/>
                    </NavBarItem>
                    <NavBarItem text={"מבט כללי"} url={"/commander/homes/dash"}>
                        <DashboardIcon sx={{color: "blueviolet"}}/>
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