'use server'
import {createUser} from "@/db/users";
import {Job} from "@/struct/User";

export const createPost = async (formData: FormData) => {
    const id = formData.get('id') as string
    const job = formData.get('job') as Job

    const name = formData.get('name') as string

    await createUser({
        _id: id,
        icon: undefined,
        id: id,
        jobs: [job],
        name: name
    })
}


