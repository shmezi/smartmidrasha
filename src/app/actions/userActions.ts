'use server'
import {Job, User} from "@/struct/User";
import connectDBIfNotConnected from "@/database";

export const getUserList = async () => {
    await connectDBIfNotConnected()
    return User.find();
}
export const getRoomList = async () => {
}

export const getCommanderList = async () => {
}
export const getUserByID = async () => {

}
export const getRoomByID = async () => {
}

export const createUserAction = async (formData: FormData) => {
    const id = formData.get('id') as string
    const job = formData.get('job') as Job

    const name = formData.get('name') as string

    await User.insertOne({
        _id: id,
        icon: undefined,
        id: id,
        jobs: [job],
        name: name
    })
}

export const deleteUserAction = async (id:string) => {
    // const id = formData.get('id') as string
    await User.findByIdAndDelete(id)


}




