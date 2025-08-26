'use client'
import {List, ListItem, ListItemButton} from "@mui/material";
import {IUser} from "@/struct/impl/User";
import React, {useState} from "react";

const SoliderSelector = (props: { soldiers: IUser[] }) => {

    const [selected, setSelected] = useState<string[]>([])

    const handleToggle = (soliderId: string) => {
        if (selected.includes(soliderId)) {
            setSelected(selected.filter(id => id !== soliderId));
            return
        }
        setSelected([...selected, soliderId]);
    }
    const selectionList = (id: string) => {
        if (selected.includes(id))
            return "present"
        return "absent"
    }

    return <>
        {selected.map((item) => (
            <input key={item} name={"present"} value={item} type={"hidden"}/>
        ))}
        <List>

            {props.soldiers.map((solider) => (
                <ListItem key={solider._id} onClick={() => {
                    handleToggle(solider._id)
                }}>
                    <ListItemButton
                        selected={selected.includes(solider._id)}>{solider.name}{solider._id}</ListItemButton>
                </ListItem>
            ))
            }
        </List></>

}
export default SoliderSelector