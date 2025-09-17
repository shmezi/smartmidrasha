'use client'
import {FormControl, TextField} from "@mui/material";
import React, {ChangeEvent, useState} from "react";

const RegexField = (props: {
    regex: string,
    name: string,
    formField?: string,
    limit?: number | null,
    required: boolean
}) => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        console.log(e.target.value)
        if (e.target.value.match(props.regex)) {

            setNameError(false);
        } else {
            setNameError(true);
        }
    };

    return <FormControl>
        <TextField required={props.required}
                   slotProps={{htmlInput: {maxLength: props.limit}}}
                   value={name}
                   name={props.formField}
                   onChange={handleNameChange}
                   error={nameError} inputMode={"numeric"} sx={{margin: "1rem"}}
                   label={props.name} variant="outlined"
        />
    </FormControl>


}
export default RegexField