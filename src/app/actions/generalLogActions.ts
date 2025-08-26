'use server'
import {GeneralAttendanceLog, IGeneralAttendanceLog} from "@/struct/impl/GeneralAttendanceLog";

export const createGeneralLog = async (formData: FormData) => {
    const commanderId = formData.get('commanderId') as string
    const present = formData.getAll('present') as string[]

    const log: IGeneralAttendanceLog = {
        commanderId: commanderId,
        date: new Date().toLocaleDateString(),
        present: present
    }
    await GeneralAttendanceLog.insertOne(log)
}
export const getGeneralLog = async (commander: string, date: string) => {
    return GeneralAttendanceLog.find({commanderId: commander, date: date})
}



