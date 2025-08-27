import {ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import React from "react";
import {useRouter} from "next/navigation";

const NavBarItem = ({url, text, children}: {
    url: string, text: string,
    children: React.ReactNode
}) => {
    const router = useRouter()
    return <ListItem>
        <ListItemButton sx={{padding: "0"}} onClick={() => {
            router.push(url)
        }}>
            <ListItemIcon>
                {children}
            </ListItemIcon>
            <ListItemText sx={{textAlign: "right"}} dir={"rtl"}>{text}</ListItemText>
        </ListItemButton>

    </ListItem>
}
export default NavBarItem