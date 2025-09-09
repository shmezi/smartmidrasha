import {Selectable} from "@/struct/Selectable";
import * as mongoose from "mongoose";
import {Gender} from "@/struct/schemas/data/Home";
import {getHighestJob, Job} from "@/struct/Job";

export interface IUser extends Selectable {
    _id: string,

    name: string
    jobs: string[],
    homeId: string
    gender: Gender,
    phone: string,
    commanderId: string,

}
export const fromUser = (user: IUser): IUser => {
    const modifiedUser = user
    modifiedUser.icon = getHighestJob(user.jobs.map((jobId) => {
        console.log(`SHOW: ${Job.fromString(jobId)}`)
        return Job.fromString(jobId)
    }).filter((job) => {
        return job != undefined
    })).icon

    return modifiedUser
}


const userSchema = new mongoose.Schema<IUser>({
    _id: String,
    name: String,
    jobs: {
        type: [String], // This specifies an array of strings
        enum: Job.values.map((user) => {
            return user.id
        }), // This applies the enum validator to each element in the array
        required: true
    },
    homeId: String,
    gender: {
        type: String, // This specifies an array of strings
        enum: Object.values(Gender), // This applies the enum validator to each element in the array
        required: true
    },
    phone: String,
    commanderId: String
})

export const User = mongoose.models?.Users || mongoose.model('Users', userSchema);

