'use server'
import {AccountCircle} from "@mui/icons-material";
import {Box, Button, Card, FormControl, InputAdornment, TextField, Typography} from "@mui/material";
import Form from "next/form";
import {verifyAuthRequest} from "@/app/actions/authActions";

const Verify = async () => {
    return (<>

            <Form action={verifyAuthRequest}>

                <Box margin={"2rem"} justifyItems={"center"}>

                    <Card sx={{
                        width: "90%",
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        justifyContent: "center",
                        alignItems: "center"

                    }}>

                        <Box flexDirection={"column"} padding={"1rem"}>

                            <Typography fontSize={"xx-large"} textAlign={"center"}>כניסה</Typography>

                            <FormControl>

                                <TextField
                                    name={"phone"}

                                    sx={{
                                        padding: "0",
                                        width: "90%"
                                    }} fullWidth={false} type={"number"} slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle/>
                                            </InputAdornment>
                                        ),
                                    }
                                }}>

                                </TextField>
                            </FormControl>
                            <FormControl>

                                <TextField
                                    name={"code"}

                                    sx={{
                                        padding: "0",
                                        width: "90%"
                                    }} fullWidth={false} type={"number"} slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle/>
                                            </InputAdornment>
                                        ),
                                    }
                                }}>

                                </TextField>
                            </FormControl>
                            <Button type={"submit"} variant={"outlined"}>כניסה</Button>

                        </Box>

                    </Card>

                </Box>
            </Form></>
    )
}
export default Verify