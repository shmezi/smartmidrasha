import * as mongoose from "mongoose";
import {expectedLogSchema} from "@/struct/schemas/attendance/ExpectedLog";

export const PresentLog = mongoose.models?.PresentLog || mongoose.model('PresentLog', expectedLogSchema);

