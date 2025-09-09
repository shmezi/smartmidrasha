// import NextAuth from "next-auth"
// import {MongoDBAdapter} from "@auth/mongodb-adapter";
// import client from "@/lib/db";
// import Credentials from "@auth/core/providers/credentials";
// import {validateOTP} from "@/app/actions/authActions";
// import {IUser, User} from "@/struct/schemas/data/User";
// import {DefaultUser} from "@auth/core/types";
//
//
// export const {handlers, auth, signIn, signOut} = NextAuth({
//     adapter: MongoDBAdapter(client, {}),
//     providers: [
//         Credentials({
//             // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//             // e.g. domain, username, password, 2FA token, etc.
//             credentials: {
//                 phone: {type: "text"},
//                 code: {type: "text"},
//             },
//             authorize: async (credentials) => {
//
//                 const phone = credentials.phone as string
//                 const code = credentials.code as string
//                 const validLogin = await validateOTP(phone, code)
//                 const retreivedUser: IUser | null = await User.findOne({phone: phone});
//                 if (!retreivedUser) return null
//                 const user = {
//                     id: retreivedUser._id,
//                     name: retreivedUser.name,
//                     email: retreivedUser.phone,
//                     awesome: retreivedUser.phone
//                 }
//                 if (validLogin)
//                     return user
//                 return null
//             },
//
//         }),
//     ],
//     session: {strategy: "jwt"},
//
//     callbacks: {
//         authorized: async ({auth}) => {
//             // Logged in users are authenticated, otherwise redirect to login page
//             return !!auth
//         },
//         async jwt({token, user}) {
//             if (user) { // User is available during sign-in
//                 const actualUser: IUser | null = (await User.findOne({phone: user.email}))
//                 if (!actualUser) return token
//                 token.id = user.id
//                 token.roles = actualUser.jobs
//             }
//             return token
//         },
//
//
//     },
// })


import {betterAuth} from "better-auth";
import {mongodbAdapter} from "better-auth/adapters/mongodb";
import {phoneNumber} from "better-auth/plugins"
import client from "@/lib/db";
import { nextCookies } from "better-auth/next-js";


const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db),
    secret: process.env.AUTH_SECRET ?? "kSKbHkB0DJMTZkXZzAmvHFxXFCQpnrTUqzsFr8nWzw8=",
    encryptOAuthTokens: true,

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
        }),
        nextCookies()
    ]
});