import * as mongoose from "mongoose";

/**
 * Represents a one time code for a user to log in.
 * @param _id Phone number of user to be authenticated.
 * @param key The actual one time code hashed including the salt. Format: HASHEDCODESALT
 */
export interface IOTP {
    _id: string
    key: string,
    salt: string
}

const otpSchema = new mongoose.Schema<IOTP>({
    _id: String,
    key: String,
    salt: String
})

export const OTP = mongoose.models?.OTP || mongoose.model('OTP', otpSchema);

