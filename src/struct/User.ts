import {Selectable} from "@/struct/Selectable";
import * as mongoose from "mongoose";
import {ADMIN_ICON, COMMANDER_ICON, HOME_COMMANDER_ICON, SOLIDER_ICON} from "@/app/admin/[[...slug]]/comps/const/icons";


export enum Job {
    default = "DEFAULT",
    commander = "COMMANDER",
    room_commander = "ROOM_COMMANDER",
    admin = "ADMIN",
}
export const jobIcon = (job: Job) =>{
    switch (job) {
        case Job.default:
            return SOLIDER_ICON;
        case Job.commander:
            return COMMANDER_ICON;
        case Job.room_commander:
            return HOME_COMMANDER_ICON;
        case Job.admin:
            return ADMIN_ICON;
    }
}

export const getHighestJob = (jobs: Job[]) => {
    if (jobs.includes(Job.admin))
        return Job.admin
    if (jobs.includes(Job.commander))
        return Job.commander
    if (jobs.includes(Job.room_commander))
        return Job.room_commander
    return Job.default
}

export interface IUser extends Selectable {
    _id: string
    name: string
    jobs: Job[]
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

