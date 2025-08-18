import {IUser, User} from "@/struct/User";
import connectDBIfNotConnected from "@/database";

export const getUserList = async () => {
    await connectDBIfNotConnected()
    return User.find();
}
export const getRoomList = () => {
}

export const getCommanderList = () => {
}
export const getUserByID = () => {

}
export const getRoomByID = () => {
}
export const createUser = async (user: IUser) => {
    await User.insertOne(user)
    console.log("HELLO")
}