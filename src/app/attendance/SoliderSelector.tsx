'use client'
import {List, ListItem, ListItemButton} from "@mui/material";
import React, {useState} from "react";
import {MidrashaUser} from "@/struct/MidrashaUser";

const SoliderSelector = (props: { soldiers: MidrashaUser[] }) => {

    const [selected, setSelected] = useState<string[]>([])

    const handleToggle = (soliderId: string) => {
        if (selected.includes(soliderId)) {
            setSelected(selected.filter(id => id !== soliderId));
            return
        }
        setSelected([...selected, soliderId]);
    }

    return <>
        {selected.map((item) => (
            <input key={item} name={"present"} value={item} type={"hidden"}/>
        ))}
        <List>

            {props.soldiers.map((solider) => (
                <ListItem sx={{
                    margin: "0.3rem",
                    padding: selected.includes(solider.id) ? "1px" : "2px",
                }} key={solider.id} onClick={() => {
                    handleToggle(solider.id)
                }}>
                    <ListItemButton
                        sx={{

                            boxSizing: "border-box",
                            padding: "0.5rem 2rem",
                            border: selected.includes(solider.id) ? "2px solid" : "1px solid",
                            borderColor: selected.includes(solider.id) ? "green" : "black",
                            borderRadius: "1.2rem",
                            justifyContent: "center",
                            alignContent: "center"
                        }}
                        selected={selected.includes(solider.id)}>{solider.name}
                    </ListItemButton>
                </ListItem>
            ))
            }
        </List></>

}
export default SoliderSelector