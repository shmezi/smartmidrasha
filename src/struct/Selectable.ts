import React from "react";
import {getHighestJob, IUser, jobIcon} from "@/struct/impl/User";
import {genderIcon, IHome} from "@/struct/impl/Home";

export interface Selectable {
    id: string,
    name: string,
    icon: React.ReactNode
}

export const fromUser = (user: IUser): IUser => {


    return {
        homeId: user.homeId,
        _id: user._id,
        id: user._id,
        name: `${user.name} | ${user.id}`,
        icon: jobIcon(getHighestJob(user.jobs)),
        jobs: user.jobs
    }
}
export const fromHome = (home: IHome): IHome => {


    return {
        gender: home.gender,
        id: home.id,
        name: `${home.name}`,
        icon: genderIcon(home.gender)

    }
}