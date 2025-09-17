'use client'
import {Box, Button, Card, FormControl, InputAdornment, Typography} from "@mui/material";
import Form from "next/form";
import {sendAuthRequest, verifyAuthRequest} from "@/actions/authActions";
import {useState} from "react";
import OTPField from "@/app/login/otp/OTPField";
import {Phone} from "@mui/icons-material";
import {TextBox} from "@/components/TextBox";

const SignIn = () => {
    const [number, setNumber] = useState("")
    const [verify, setVerify] = useState(false)
    return (
        <Box display={"flex"} bgcolor={"whitesmoke"} height={"100%"} alignItems={"center"} justifyContent={"center"}>
            <Form id={"otp-form"} action={verify ? verifyAuthRequest : sendAuthRequest} onSubmit={() => {
                setVerify(true)
            }}>

                <Box justifyItems={"center"} alignContent={"center"} alignItems={"center"}>

                    <Card sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        alignItems: "center",
                        padding: "1rem 2rem 3rem 2rem"
                    }}>


                        <Box display={"flex"} width={"100%"} flexDirection={"column"} alignItems={"center"}
                        >

                            <Typography fontSize={"xx-large"} textAlign={"center"}>כניסה</Typography>
                            {verify ? <input type={"hidden"} name={"phone"} value={number}/> : <></>}
                            <FormControl>


                                {verify ?

                                    <OTPField fields={6}/> : <TextBox name={"phone"}
                                                                      value={number}
                                                                      onChange={(e) => {
                                                                          setNumber(e.target.value)
                                                                      }} slotProps={{
                                        input: {
                                            endAdornment: (
                                                <InputAdornment
                                                    position="end"

                                                >
                                                    <Phone/>
                                                </InputAdornment>)
                                        }
                                    }}>

                                    </TextBox>
                                }
                            </FormControl>
                            <Button sx={{margin: "1rem"}} type={"submit"} variant={"outlined"}>שלח לי קוד</Button>
                        </Box>

                    </Card>

                </Box>
            </Form></Box>
    )
}
export default SignIn