'use server'
import {AttendanceLog, IAttendanceLog} from "@/struct/impl/AttendanceLog";

export const createUserLog = async (formData: FormData) => {
    const commanderId = formData.get('commanderId') as string
    const absent = formData.getAll('absent') as string[]
    const present = formData.getAll('present') as string[]

    const log: IAttendanceLog = {
        commanderId: commanderId,
        date: new Date().toLocaleDateString(),
        absent: absent,
        present: present
    }
    await AttendanceLog.insertOne(log)
}
export const getUserLog = async (commander: string, date: string) => {
    return AttendanceLog.find({commanderId: commander, date: date})
}



