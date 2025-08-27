import * as mongoose from "mongoose";


export interface IAttendanceLog {
    commanderId: string
    present: string[]
    date: string
}


export const expectedLogSchema = new mongoose.Schema<IAttendanceLog>({
    present: [String],
    commanderId: String,
    date: String
})

export const ExpectedLog = mongoose.models?.ExpectedLog || mongoose.model('ExpectedLog', expectedLogSchema);

