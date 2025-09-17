import {TextField} from "@mui/material";


const OTPBox = (
    {
        id,
        next,
        previous,
        content,
        setContent
    }: {
        id: string,
        next: () => void,
        previous: () => void
        content: string,
        setContent: (content: string) => void
    }
) => {


    return <TextField
        id={id}
        value={content}
        sx={{
            width: "10%",
            margin: "0.2rem"
        }}

        onChange={(event) => {


            const newContent = event.target.value
            const newChar = newContent.length == 1 ? event.target.value : event.target.value.replace(content, "")
            if (!newChar.match("^\\d?$"))
                return
            setContent(newChar)
            if (newChar == "")
                return;
            setTimeout(next, 100)

        }}
        onKeyUp={(event) => {

            const key = event.key
            if (key === "Backspace" || key === "Delete") {
                previous()

            }
        }}

    >
    </TextField>
}
export default OTPBox