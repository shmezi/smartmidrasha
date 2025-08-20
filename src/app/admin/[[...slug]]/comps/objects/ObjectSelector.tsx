'use server'
import {Box, List} from "@mui/material";
import SelectableObject from "@/app/admin/[[...slug]]/comps/objects/SelectableObject";
import React from "react";
import {Selectable} from "@/struct/Selectable";
import CreationDialog from "@/app/admin/[[...slug]]/comps/objects/CreationDialog";
import {BasePanel} from "@/app/admin/panel/BasePanel";


const ObjectSelector = (props: { pane: BasePanel | undefined, selectables: Selectable[] | undefined }) => {
    if (!props.selectables || !props.pane)
        return <Box sx={{height: "100vh", maxWidth: "20rem", position: "relative"}}/>


    return <Box sx={{height: "100vh", width: "20rem", position: "relative"}}>
        <CreationDialog pane={props.pane.getCreationPane()}/>
        <List component="nav" sx={{overflowY: "scroll", maxHeight: "100%"}}>
            {
                props.selectables.map((item, index) => {
                    return <SelectableObject
                        key={index}
                        selectable={{
                            id: item.id,
                            name: item.name,
                            icon: item.icon
                        }}/>
                })
            }

        </List>


    </Box>

}
export default ObjectSelector