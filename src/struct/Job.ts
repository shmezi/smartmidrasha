import {ADMIN_ICON, COMMANDER_ICON, HOME_COMMANDER_ICON, SOLIDER_ICON} from "@/constants/icons";
import React from "react";


export class Job {
    public static readonly DEFAULT = new Job("default", SOLIDER_ICON, 0);
    public static readonly HOME_COMMANDER = new Job("home_commander", HOME_COMMANDER_ICON, 1);
    public static readonly COMMANDER = new Job("commander", COMMANDER_ICON, 2);
    public static readonly ADMIN = new Job("admin", ADMIN_ICON, 3);

    public static readonly values = [Job.DEFAULT, Job.HOME_COMMANDER, Job.COMMANDER, Job.ADMIN]

    public static readonly byIndex = (index: number) => {
        return Job.values[index]
    }
    public static readonly fromString = (value: string) => {
        return Job.values.find((job) => {

            return job.id == value.toLowerCase()
        })
    }

    private constructor(public readonly id: string, public readonly icon: React.ReactNode, public readonly priority: number) {
    }
}


export const getHighestJob = (jobs: Job[]) => {
    let highest = 0
    for (const job of jobs) {

        if (job.priority < highest)
            continue
        highest = job.priority
    }
    console.log(`Returning ${highest}`)
    return Job.byIndex(highest)
}
