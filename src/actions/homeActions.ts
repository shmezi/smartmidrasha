'use server'
import {Gender, Home} from "@/struct/schemas/Home";


export const createHomeAction = async (formData: FormData) => {
    const id = formData.get('id') as string
    const gender = formData.get('gender') as Gender
    const name = formData.get('name') as string
    const phone = formData.get('phone') as string

    await Home.insertOne({
        id: id,
        gender: gender,
        name: name,
        phone: phone
    })
}

export const deleteHomeAction = async (id: string) => {
    // constants id = formData.get('id') as string
    await Home.findByIdAndDelete(id)


}




