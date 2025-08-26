import * as mongoose from "mongoose";


export interface IAttendanceLog {
    commanderId: string
    present: string[]
    date: string
}


export const attendanceSchema = new mongoose.Schema<IAttendanceLog>({
    present: [String],
    commanderId: String,
    date: String
})

export const AttendanceLog = mongoose.models?.AttendanceLog || mongoose.model('AttendanceLog', attendanceSchema);

