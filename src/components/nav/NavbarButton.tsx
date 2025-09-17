'use client'
import React, {useEffect, useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {Box, Card, Drawer, List, Typography} from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import NavBarItem from "@/components/nav/NavBarItem";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import {House} from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import {createAuthClient} from "better-auth/react";
import {timeOfDay} from "@/utils/utils";
import {socket} from "@/socket";
import CircleIcon from "@mui/icons-material/Circle";

const {useSession} = createAuthClient()

const NavBarButton = () => {
    const [open, setOpen] = useState(false)
    const [connected, setConnected] = useState(false)
    const session = useSession()
    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to Socket.IO server');
            setConnected(true)
        });
        setConnected(socket.connected)

        socket.on('disconnect', () => {
            console.log('Disconnected from Socket.IO server');
            setConnected(false)
        });
    })


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
                    <NavBarItem text={"מבט כללי"} url={"/attendance/homes/dash"}>
                        <DashboardIcon sx={{color: "blueviolet"}}/>
                    </NavBarItem>
                    <NavBarItem text={"מעבר דירות"} url={"/attendance/homes/attendanceCheck"}>
                        <House sx={{color: "purple"}}/>
                    </NavBarItem>
                    <NavBarItem text={"החיילים שלי"} url={"/attendance/homes/mySoldiers"}>
                        <MilitaryTechIcon sx={{color: "orange"}}/>
                    </NavBarItem>


                </List>
                <Card>
                    <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                        <CircleIcon
                            sx={{
                                marginLeft: "0.4rem",
                                marginRight: "0.4rem",
                                fontSize: "x-small",
                                color: connected ? "green" : "red"
                            }}/>
                        <Typography sx={{textAlign: "right"}}>{connected ? "מחובר למערכת" : "מנותק"}</Typography>
                    </Box>
                </Card>
            </Box>
        </Drawer>

        <MenuIcon sx={{marginRight: "1rem", fontSize: "xx-large"}} onClick={() => {
            setOpen(!open)
        }}/>

    </>
}
export default NavBarButton