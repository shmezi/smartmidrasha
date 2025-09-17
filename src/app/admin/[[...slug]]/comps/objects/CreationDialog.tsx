'use client'
import React from "react";
import {Button, Dialog, DialogActions, Fab, FormControl} from "@mui/material";
import {Add} from "@mui/icons-material";

const CreationDialog = (props: { pane: React.ReactNode }) => {

    const [creationDialog, setCreationDialog] = React.useState(false);

    return <>

        <Fab color={"info"} sx={{position: "fixed", bottom: "0px", left: "0px", margin: "1rem"}}
             onClick={() => {

                 setCreationDialog(true)
             }}

        >
            <Add/>
        </Fab>


        <Dialog fullWidth={true} open={creationDialog} onClose={() => {
            setCreationDialog(false)
        }}>

            <FormControl fullWidth>
                {props.pane}
                <DialogActions sx={{display: "flex", justifyContent: "center"}}>
                    <Button form={"creation-dialog"} type={"submit"} variant={"outlined"} onClick={() => {
                        setCreationDialog(false)
                    }}>יצירה
                    </Button>

                </DialogActions>
            </FormControl>

        </Dialog>


    </>
}
export default CreationDialog