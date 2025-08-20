'use server'
import {User} from "@/struct/impl/User";
import connectDBIfNotConnected from "@/database";
import {Gender, Home} from "@/struct/impl/Home";

export const getHomeList = async () => {
    await connectDBIfNotConnected()
    return Home.find();
}
export const getRoomList = async () => {
}

export const getCommanderList = async () => {
}
export const getUserByID = async () => {

}
export const getRoomByID = async () => {
}

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

export const deleteUserAction = async (id: string) => {
    // const id = formData.get('id') as string
    await User.findByIdAndDelete(id)


}




