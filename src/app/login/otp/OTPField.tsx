'use client'
import {Box} from "@mui/material";
import OTPBox from "@/app/login/otp/OTPBox";
import {useState} from "react";

const OTPField =
    ({
         fields = 6,
     }: {
        fields: number
    }) => {

        const [value, setValue] = useState([...Array(fields)].map(() => {
            return ''
        }))


        const items = [...Array(fields)].map((_, index) => {
            const id = `otp-${index}`
            return <OTPBox id={id} key={index}
                           next={() => {
                               if (index == items.length - 1) {
                                   console.log("Submitted!")

                                   const form = document.getElementById("otp-form") as HTMLFormElement
                                   form.requestSubmit()
                                   return
                               }
                               document.getElementById(`otp-${index + 1}`)?.focus();

                           }}
                           previous={() => {
                               document.getElementById(`otp-${index - 1}`)?.focus();
                           }}
                           content={value[index]}
                           setContent={(content) => {
                               setValue(value.map((item, i) => i === index ? content : item))

                           }}/>
        })


        return <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
            <input type={"hidden"} name={"code"} value={value.join("")}/>
            {items}
        </Box>
    }
export default OTPField