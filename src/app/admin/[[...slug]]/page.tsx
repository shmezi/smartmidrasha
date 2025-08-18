'use server'
import {Box} from "@mui/material";
import React from "react";
import NavigationColumn from "@/app/admin/[[...slug]]/comps/navigation/NavigationColumn";
import ObjectSelector from "@/app/admin/[[...slug]]/comps/objects/ObjectSelector";
import {CalendarMonth, Home} from "@mui/icons-material";
import {HOME_ICON, SOLIDER_ICON} from "@/app/admin/[[...slug]]/comps/const/icons";


const AdminPage = () => {


    return <>

        <Box display={"flex"} flexDirection={"row"}>
            <NavigationColumn options={[
                {
                    id: "homes",
                    icon: HOME_ICON
                },
                {
                    id: "users",
                    icon: SOLIDER_ICON
                }
            ]}/>

            <ObjectSelector selectables={[
                {
                    id: "לוח שנה",
                    icon: <CalendarMonth/>
                }, {
                    id: "מגורים קומה א",
                    icon: <Home/>
                }, {
                    id: "מגורים קומה ב",
                    icon: <Home/>
                }, {
                    id: "חדר אוכל",
                    icon: <Home/>
                }, {
                    id: "מחסן ציוד",
                    icon: <Home/>
                }, {
                    id: "חדר מפקדים",
                    icon: <Home/>
                }, {
                    id: "מרפאה",
                    icon: <Home/>
                }, {
                    id: "חדר כושר",
                    icon: <Home/>
                }, {
                    id: "חדר מחשבים",
                    icon: <Home/>
                }, {
                    id: "מחסן נשק",
                    icon: <Home/>
                }, {
                    id: "כיתת הדרכה",
                    icon: <Home/>
                }, {
                    id: "שירותים",
                    icon: <Home/>
                }, {
                    id: "מקלחות",
                    icon: <Home/>
                }, {
                    id: "חדר ישיבות",
                    icon: <Home/>
                }, {
                    id: "משרד משא״ן",
                    icon: <Home/>
                }, {
                    id: "משרד לוגיסטיקה",
                    icon: <Home/>
                }, {
                    id: "שטח מסדר",
                    icon: <Home/>
                }, {
                    id: "חדר טלוויזיה",
                    icon: <Home/>
                }, {
                    id: "קפיטריה",
                    icon: <Home/>
                }, {
                    id: "מחסן תחמושת",
                    icon: <Home/>
                }, {
                    id: "כיתת לימוד",
                    icon: <Home/>
                }, {
                    id: "מטבח",
                    icon: <Home/>
                }
            ]}/>


        </Box>
    </>


}
export default AdminPage