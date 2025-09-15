import {betterAuth} from "better-auth";
import {mongodbAdapter} from "better-auth/adapters/mongodb";
import {admin, phoneNumber} from "better-auth/plugins"
import client from "@/lib/db";
import {nextCookies} from "better-auth/next-js";
import {accessControl, adminRole, commanderRole, dutyOfficerRole} from "@/lib/permissions";


const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db),
    secret: process.env.AUTH_SECRET ?? "kSKbHkB0DJMTZkXZzAmvHFxXFCQpnrTUqzsFr8nWzw8=",
    encryptOAuthTokens: true,
    user: {
        additionalFields: {
            homeId: {
                type: "string",
            },
            commanderId: {
                type: "string",
            }

        }
    },
    plugins: [
        phoneNumber({
            sendOTP: async ({phoneNumber, code}, request) => {
                await fetch("http://localhost:4000/auth", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Indicate the body content type
                    },
                    body: JSON.stringify({
                        phone: phoneNumber,
                        code: code
                    })
                })
            },
            signUpOnVerification: {
                getTempEmail: (phoneNumber) => {
                    return `${phoneNumber}@my-site.com`
                },

            }
        }), admin({
            ac: accessControl,
            roles: {
                adminRole,
                dutyOfficerRole,
                commanderRole
            }
        }),
        nextCookies()
    ]
});
type Session = typeof auth.$Infer.Session

// await auth.api.createUser({
//     body: {
//         name: "Shemzi",
//         email: "shmezi@midrasha.il",
//         password: "admin",
//         role: ["dutyOfficerRole","adminRole", "commanderRole"],
//         data: {
//             phoneNumber: "972584819414"
//         }
//     }
// })