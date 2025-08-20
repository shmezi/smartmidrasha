import React from "react";
import {getHighestJob, IUser, jobIcon} from "@/struct/User";

export interface Selectable {
    id: string,
    name: string,
    icon: React.ReactNode
}

export const fromUser = (user: IUser): IUser => {


    return {
        _id: user._id,
        id: user._id,
        name: `${user.name} | ${user.id}`,
        icon: jobIcon(getHighestJob(user.jobs)),
        jobs: user.jobs
    }

}