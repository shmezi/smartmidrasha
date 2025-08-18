import * as mongoose from "mongoose";

export interface IOrganization {
    _id: string
    name: string
    location: string
    status: string


}

/**
 * An organization (Generally a school) this includes information about the org and other stuff.
 * @param _id ID of the organization.
 * @param status The current Status of the organization.
 * @param staffers Staff members, and their Staff objects see Staff.ts
 * @param classes Classes that in the school.
 */
const organizationSchema = new mongoose.Schema<IOrganization>({
    _id: String,
    name: String,
    location: String,
    // status: {type: String, enum: objectStatuses}
})
export const Organization = mongoose.models.Organizations || mongoose.model('Organizations', organizationSchema);
