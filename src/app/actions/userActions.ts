'use server'
import {User} from "@/struct/schemas/data/User";
import {Gender} from "@/struct/schemas/data/Home";


export const createUserAction = async (formData: FormData) => {
    const id = formData.get('id') as string
    const job = formData.get('job') as string

    const name = formData.get('name') as string
    const homeId = formData.get('homeId') as string
    const commanderId = formData.get('commanderId') as string
    const gender = formData.get('gender') as Gender

    await User.insertOne({
        _id: id,
        icon: undefined,
        id: id,
        jobs: [job],
        name: name,
        homeId: homeId,
        commanderId: commanderId,
        gender: gender
    })
}

export const deleteUserAction = async (id: string) => {
    // constants id = formData.get('id') as string
    await User.findByIdAndDelete(id)


}




