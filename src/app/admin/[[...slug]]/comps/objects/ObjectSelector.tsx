import {Box, createTheme, List} from "@mui/material";
import SelectableObject from "@/app/admin/[[...slug]]/comps/objects/SelectableObject";
import React from "react";
import {Selectable} from "@/struct/Selectable";
import CreationDialog from "@/app/admin/[[...slug]]/comps/objects/CreationDialog";


const ObjectSelector = (props: { selectables: Selectable[] }) => {


    return <Box sx={{maxHeight: "100vh", maxWidth: "20rem", position: "relative"}}>
       <CreationDialog/>
        <List component="nav" sx={{overflowY: "scroll", maxHeight: "100%"}}>
            {
                props.selectables.map((item, index) => {
                    return <SelectableObject key={index}

                                             selectable={{id: item.id, icon: item.icon}}/>
                })
            }

        </List>


    </Box>

}
export default ObjectSelector