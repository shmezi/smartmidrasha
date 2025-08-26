'use client'
import React, {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {Box, Drawer, Link, List, ListItem, Typography} from "@mui/material";

const NavBarButton = () => {
    const [open, setOpen] = useState(false)


    return <>
        <Drawer open={open} anchor={"right"} onClose={() => {
            setOpen(false)
        }}>
            <Box margin={"1rem"} marginRight={"0.3rem"}>
                <Typography fontSize={"x-large"}>שלום חייל!</Typography>
                <List>
                    <ListItem>
                        <Link href={"/admin/users"}>מנהלן</Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"/commander/homes/soliders"}>מפקד</Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"/commander/homes/review"}>קצין תורן</Link>
                    </ListItem>
                </List>
            </Box>
        </Drawer>

        <MenuIcon sx={{marginRight: "1rem"}} onClick={() => {
            setOpen(!open)
        }}/>

    </>
}
export default NavBarButton