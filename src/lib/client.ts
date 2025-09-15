import {createAuthClient} from "better-auth/client"
import {adminClient, inferAdditionalFields, phoneNumberClient} from "better-auth/client/plugins"
import {accessControl, adminRole, commanderRole, dutyOfficerRole} from "@/lib/permissions";
import {auth} from "../../auth";

export const authClient = createAuthClient({
    plugins: [
        phoneNumberClient(),
        inferAdditionalFields<typeof auth>(),
        adminClient({
            ac: accessControl,
            roles: {
                admin: adminRole,
                dutyOfficer: dutyOfficerRole,
                commander: commanderRole
            }
        }),
    ]
})