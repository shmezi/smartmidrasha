'use server'
import {Gender} from "@/struct/schemas/data/Home";
import {auth} from "../../../auth";


export const createUserAction = async (formData: FormData) => {
    const job = formData.get('job') as "adminRole" | "dutyOfficerRole" | "commanderRole" | ("adminRole" | "dutyOfficerRole" | "commanderRole")

    const name = formData.get('name') as string
    const homeId = formData.get('homeId') as string
    const commanderId = formData.get('commanderId') as string
    const gender = formData.get('gender') as string
    const phone = formData.get('phone') as string

    await auth.api.createUser({
        body: {
            email: "user@midrasha.il",
            password: "password",
            name: name,

            role: [job],
            data: {
                phone: phone,
                gender: gender,
                homeId: homeId,
                commanderId: commanderId
            },

        }
    })
}

export const deleteUserAction = async (id: string) => {
    // constants id = formData.get('id') as string
    // await User.findByIdAndDelete(id)


}




