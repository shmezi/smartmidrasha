'use client'
import React from "react";
import {Button, Dialog, DialogActions, DialogTitle, Fab, FormControl, MenuItem, Select, TextField} from "@mui/material";
import RegexField from "@/app/admin/[[...slug]]/comps/RegexField";
import {Job} from "@/struct/User";
import {Add} from "@mui/icons-material";
import Form from "next/form";
import {createPost} from "@/app/api/user/create/route";

const CreationDialog = () => {

    const [creationDialog, setCreationDialog] = React.useState(false);

    return <>

        <Fab color={"info"} sx={{position: "absolute", bottom: "0px", left: "0px", margin: "1rem"}}
             onClick={() => {

                 setCreationDialog(true)
             }}

        >
            <Add/>
        </Fab>


        <Dialog fullWidth={true} open={creationDialog} onClose={() => {
            setCreationDialog(false)
        }}> <Form action={createPost}>
            <FormControl fullWidth>

                <DialogTitle>יצירת משתמש</DialogTitle>


                <RegexField formField={"id"} limit={7} regex={"^[0-9]{7}$"} required={true}></RegexField>
                <TextField name={"name"} required={true} sx={{margin: "1rem"}} label={"שם"}/>

                <Select name={"job"} defaultValue={Job.default} sx={{margin: "1rem"}} variant={"outlined"}>
                    <MenuItem value={Job.commander}>מפקד</MenuItem>
                    <MenuItem value={Job.room_commander}>מפקד חדר</MenuItem>
                    <MenuItem value={Job.default}>חייל</MenuItem>
                </Select>

                <DialogActions sx={{display: "flex", justifyContent: "center"}}>
                    <Button type={"submit"} variant={"outlined"} onClick={() => {
                        setCreationDialog(false)


                    }}>צור משתמש
                    </Button>

                </DialogActions>
            </FormControl>
        </Form>
        </Dialog>


    </>
}
export default CreationDialog