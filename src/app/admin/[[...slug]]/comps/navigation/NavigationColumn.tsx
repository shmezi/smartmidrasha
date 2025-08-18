'use client'
import {List} from "@mui/material";
import NavigationButton from "@/app/admin/[[...slug]]/comps/navigation/NavigationButton";
import React from "react";
import {Selectable} from "@/struct/Selectable";

const NavigationColumn = (props: { options: Selectable[]}) => {


    return <List component="nav">
        {props.options.map((item, index) => {

            return <NavigationButton key={index}
                                     name={props.options[index].id} prefixURL={"admin"}>{item.icon}</NavigationButton>
        })}

    </List>
}
export default NavigationColumn