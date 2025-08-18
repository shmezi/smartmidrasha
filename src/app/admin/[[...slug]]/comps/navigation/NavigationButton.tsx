import {ListItemButton, ListItemIcon} from "@mui/material";
import React from "react";
import {usePathname, useRouter} from "next/navigation";

const NavigationButton = (props: {
    prefixURL: string
    name: string,
    children: React.ReactNode
}) => {
    const path = usePathname()
    const router = useRouter()

    return <ListItemButton
        sx={{width: "3rem", height: "3rem", padding: 0, display: "flex", justifyContent: "center"}}
        alignItems={"center"}
        selected={path === `/${props.prefixURL}/${props.name}`}
        onClick={() => {
            if (path === `/${props.prefixURL}/${props.name}`)
                return
            router.push(`/${props.prefixURL}/${props.name}`)
        }}

    >
        <ListItemIcon sx={{padding: 0, display: "flex", justifyContent: "center"}}>
            {props.children}
        </ListItemIcon>
    </ListItemButton>
}

export default NavigationButton