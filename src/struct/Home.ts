import {Selectable} from "@/struct/Selectable";
import React from "react";
//Please note: There are more genders. HOWEVER, in the IDF the accommodations are split into just Male and Female.
export type Gender = "male" | "female"

interface Home extends Selectable {
    id: string
    gender: Gender,
    name: string
    icon: React.ReactNode
}

export default Home
