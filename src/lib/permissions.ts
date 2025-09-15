import {adminAc, defaultStatements} from "better-auth/plugins/admin/access";
import {createAccessControl} from "better-auth/plugins/access";

export const statement = {
    ...defaultStatements,
    user: [...defaultStatements.user, "edit"],
    houseAttendance: ["overview", "commander", "duty-officer"]
} as const;

export const accessControl = createAccessControl(statement);

export const adminRole = accessControl.newRole({
    ...adminAc.statements,
    user: ["create", "delete", "list", "update", "edit"],

});

export const commanderRole = accessControl.newRole({
    houseAttendance: ["overview", "commander"],
});
export const dutyOfficerRole = accessControl.newRole({
    houseAttendance: ["overview", "duty-officer"]
});