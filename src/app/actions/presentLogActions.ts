'use server'
import {PresentLog} from "@/struct/schemas/attendance/PresentLog";
import {IAttendanceLog} from "@/struct/schemas/attendance/ExpectedLog";

export const createPresentLog = async (formData: FormData) => {
    const commanderId = formData.get('commanderId') as string
    const present = formData.getAll('present') as string[]

    const log: IAttendanceLog = {
        commanderId: commanderId,
        date: new Date().toLocaleDateString(),
        present: present
    }
    await PresentLog.insertOne(log)
}
export const getPresentLog = async (commander: string, date: string) => {
    return PresentLog.find({commanderId: commander, date: date})
}



