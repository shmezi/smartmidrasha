import {UserWithRole} from "better-auth/plugins/admin";

export interface MidrashaUser extends UserWithRole {
    homeId: string | undefined,
    commanderId: string | undefined,
    phoneNumber: string
}