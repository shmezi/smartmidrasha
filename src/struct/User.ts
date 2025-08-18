import {Selectable} from "@/struct/Selectable";
import React from "react";
import * as mongoose from "mongoose";


export enum Job {
    default = "DEFAULT",
    commander = "COMMANDER",
    room_commander = "ROOM_COMMANDER",
    admin = "ADMIN"
}


export interface IUser extends Selectable {
    _id: string
    name: string
    jobs: Job[]
    icon: React.ReactNode
}

const userSchema = new mongoose.Schema<IUser>({
    _id: String,
    name: String,
    jobs: {
        type: [String], // This specifies an array of strings
        enum: Object.values(Job), // This applies the enum validator to each element in the array
        required: true
    }
})

export const User = mongoose.models?.Users || mongoose.model('Users', userSchema);

