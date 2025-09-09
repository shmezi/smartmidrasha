'use server'
import {IOTP, OTP} from "@/struct/schemas/auth/OTP";
import {Md5} from "ts-md5";
import {authClient} from "@/lib/client";

const generateCode = () => Math.floor(Math.random() * 1000000) + 1
export const sendAuthRequest = async (formData: FormData) => {

    const {data, error} = await authClient.phoneNumber.sendOtp({
        phoneNumber: formData.get("phone") as string, // required
    });
}
export const verifyAuthRequest = async (formData: FormData) => {
    const {data, error} = await authClient.phoneNumber.verify({
        phoneNumber: formData.get("phone") as string, // required
        code: formData.get("code") as string, // required
        disableSession: false,

    });
    console.log(`Error: ${error?.message}`)
    console.log(data?.user ?? "no item to be found :(")
}

export const validateOTP = async (phone: string, code: string): Promise<boolean> => {

    const otp: IOTP | null = await OTP.findById(phone)
    if (!otp)
        return false

    const hash = Md5.hashStr(`${code}${otp.salt}`)
    if (hash == otp.key) {
        await OTP.findByIdAndDelete(phone)
        return true
    }
    return false
}

