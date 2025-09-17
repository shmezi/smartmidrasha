import {ADMIN_ICON, COMMANDER_ICON, HOME_COMMANDER_ICON, SOLIDER_ICON} from "@/constants/icons";
import React from "react";


export class Role {
    public static readonly DEFAULT = new Role("user", SOLIDER_ICON, 0);
    public static readonly DUTY_OFFICER = new Role("dutyOfficerRole", HOME_COMMANDER_ICON, 1);
    public static readonly COMMANDER = new Role("commanderRole", COMMANDER_ICON, 2);
    public static readonly ADMIN = new Role("adminRole", ADMIN_ICON, 3);

    public static readonly values = [Role.DEFAULT, Role.DUTY_OFFICER, Role.COMMANDER, Role.ADMIN]

    public static readonly byIndex = (index: number) => {
        return Role.values[index]
    }
    public static readonly fromString = (value: string) => {
        return Role.values.find((job) => {
            console.log(`Found ${job.id}`)
            return job.id.toLowerCase() == value.toLowerCase()
        })
    }

    private constructor(public readonly id: string, public readonly icon: React.ReactNode, public readonly priority: number) {
    }
}


export const getHighestJob = (jobs: (Role | undefined)[]) => {
    let highest = 0
    for (const job of jobs) {
        if (!job)
            continue
        if (job.priority < highest)
            continue
        highest = job.priority
    }
    console.log(`Returning ${highest}`)
    return Role.byIndex(highest)
}
