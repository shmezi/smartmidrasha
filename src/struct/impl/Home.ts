import {Selectable} from "@/struct/Selectable";
import React from "react";
import {FEMALE_ICON, MALE_ICON} from "@/const/icons";
import * as mongoose from "mongoose";

//Please note: There are more genders. HOWEVER, in the IDF the accommodations are split into just Male and Female.
export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export interface IHome extends Selectable {
    id: string
    gender: Gender,
    name: string
    icon: React.ReactNode
}


export const genderIcon = (gender: Gender) => {
    if (gender == Gender.FEMALE)
        return FEMALE_ICON
    return MALE_ICON
}




const homeSchema = new mongoose.Schema<IHome>({
    id: String,
    name: String,
    gender: {
        type: String, // This specifies an array of strings
        enum: Object.values(Gender), // This applies the enum validator to each element in the array
        required: true
    }
})

export const Home = mongoose.models?.Homes || mongoose.model('Homes', homeSchema);

