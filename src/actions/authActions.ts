'use server'
import {auth} from "../../auth";

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
