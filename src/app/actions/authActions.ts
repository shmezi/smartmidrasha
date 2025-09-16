'use server'
import {Md5} from "ts-md5";
import {auth} from "../../../auth";

const generateCode = () => Math.floor(Math.random() * 1000000) + 1
export const sendAuthRequest = async (formData: FormData) => {

    await auth.api.sendPhoneNumberOTP({
        body: {
            phoneNumber: formData.get("phone") as string, // required
        }
    });
}
export const verifyAuthRequest = async (formData: FormData) => {
    console.log(`${formData.get("phone") as string} - ${formData.get("code") as string}`)
    await auth.api.verifyPhoneNumber({
        body: {
            phoneNumber: formData.get("phone") as string, // required
            code: formData.get("code") as string, // required
            disableSession: false,

        }


    });

}
