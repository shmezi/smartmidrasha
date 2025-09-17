export const sendMessage = async (phoneNumber: string, message: string) => {

    await fetch("http://localhost:4000/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // Indicate the body content type
        },
        body: JSON.stringify({
            phone: phoneNumber,
            code: message
        })
    })
}