import {Selectable} from "@/struct/Selectable";
import React from "react";
import {FEMALE_ICON, MALE_ICON} from "@/constants/icons";
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

export const fromHome = (home: IHome): IHome => {
    const modifiedHome = home
    modifiedHome.icon = genderIcon(home.gender)

    return modifiedHome
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

