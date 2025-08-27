'use server'
import {Box, List} from "@mui/material";
import SelectableObject from "@/app/(pages)/admin/[[...slug]]/comps/objects/SelectableObject";
import React from "react";
import {Selectable} from "@/struct/Selectable";
import CreationDialog from "@/app/(pages)/admin/[[...slug]]/comps/objects/CreationDialog";
import {BasePanel} from "@/app/(pages)/admin/panel/BasePanel";


const ObjectSelector = (props: { pane: BasePanel | undefined, selectables: Selectable[] | undefined }) => {
    if (!props.selectables || !props.pane)
        return <Box className={"fill-max"} sx={{maxWidth: "20rem", position: "relative"}}/>

    return <Box>
        <CreationDialog pane={props.pane.getCreationPane()}/>
        <List component="nav" disablePadding sx={{overflowY: "scroll"}}>
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