'use server'
import {ExpectedLog, IAttendanceLog} from "@/struct/schemas/attendance/ExpectedLog";

export const newExpectedLogAction = async (formData: FormData) => {
    const commanderId = formData.get('commanderId') as string
    const present = formData.getAll('present') as string[]

    const log: IAttendanceLog = {
        commanderId: commanderId,
        date: new Date().toLocaleDateString(),

        present: present
    }
    await ExpectedLog.insertOne(log)
}
export const findExpectedLogAction = async (commander: string, date: string) => {
    return ExpectedLog.find({commanderId: commander, date: date})
}



