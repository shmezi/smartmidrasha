'use client'
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";
import {Selectable} from "@/struct/Selectable";
import {useRouter, useSearchParams} from "next/navigation";


const SelectableObject = (props: {
    selectable: Selectable,

}) => {

    let user: React.ReactNode

    const params = useSearchParams()
    const router = useRouter()

    return <ListItemButton
        sx={{width: "20rem", height: "3rem", padding: 0, display: "flex", justifyContent: "center"}}
        alignItems={"center"}
        selected={props.selectable.id === params.get("selected")}
        onClick={(event) => {
            if (props.selectable.id === params.get("selected"))
                return
            router.replace(`?selected=${props.selectable.id}`, {})
        }

        }
    >

        <ListItemIcon sx={{padding: 0, display: "flex", justifyContent: "center"}}>
            {props.selectable.icon}
        </ListItemIcon>
        <ListItemText style={{display: 'flex', justifyContent: 'flex-start'}}>{props.selectable.name}</ListItemText>
    </ListItemButton>
}

export default SelectableObject