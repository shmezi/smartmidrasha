export const timeOfDay = () => {
    const hour = new Date().getHours()
    if (hour < 6 || hour > 18) return "ערב טוב"
    if (hour > 6 && hour < 12) return "בוקר טוב"
    return "צהריים טובים"
}