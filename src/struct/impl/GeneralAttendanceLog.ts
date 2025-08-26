import * as mongoose from "mongoose";
import {attendanceSchema} from "@/struct/impl/AttendanceLog";

export const GeneralAttendanceLog = mongoose.models?.GeneralAttendanceLog || mongoose.model('GeneralAttendanceLog', attendanceSchema);

