'use server'
import {auth} from "../../auth";
import {sendMessage} from "@/actions/whatsappActions";


export const createUserAction = async (formData: FormData) => {
    const job = formData.get('job') as "adminRole" | "dutyOfficerRole" | "commanderRole" | ("adminRole" | "dutyOfficerRole" | "commanderRole")

    const name = formData.get('name') as string
    const homeId = formData.get('homeId') as string
    const commanderId = formData.get('commanderId') as string
    const gender = formData.get('gender') as string
    const phone = formData.get('phone') as string

    await auth.api.createUser({
        body: {
            email: `${name}@midrasha.il`,
            password: "password",
            name: name,

            role: [job],
            data: {
                phoneNumber: phone,
                gender: gender,
                homeId: homeId,
                commanderId: commanderId
            },

        }
    })
    await sendMessage(phone, `👋 ברוך/ה הבא/ה, ${name}!  
` +
        "\n" +
        "🎉 נוצר עבורך משתמש חדש ב־*מדרשה החכמה* 🏫💡  \n" +
        "\n" +
        "🔑 ההתחברות לאתר מתבצעת עם *קוד חד־פעמי* שישלח כאן בוואטסאפ 📲.  \n" +
        "\n" +
        "✨ שיהיה שימוש נעים ומהנה במערכת! ✨  \n")
}

export const deleteUserAction = async (id: string) => {
    // constants id = formData.get('id') as string
    // await User.findByIdAndDelete(id)


}




