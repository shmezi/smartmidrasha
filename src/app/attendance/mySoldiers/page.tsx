import {Box, Button} from "@mui/material";
import Form from "next/form";
import SoliderSelector from "@/app/attendance/SoliderSelector";
import {simplifyJson} from "@/app/admin/utils";
import {auth} from "../../../../auth";
import {headers} from "next/headers";
import {MidrashaUser} from "@/struct/MidrashaUser";
import dummyAction from "@/actions/dummy";


const CommanderSoliderPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })


    const users = (await auth.api.listUsers(
        {
            query: {
                filterField: "commanderId",
                filterValue: session?.user?.id,
                limit: 10,
                offset: 0
                ,
            },
            headers: await headers()
        },
    )).users.map((user) => {
        return user as MidrashaUser
    })


    // const users = userQueryResult.users as MidrashaUser[] | never[]

    return <Box fontSize={"xx-large"}>
        <Form action={dummyAction}>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>

                <SoliderSelector soldiers={simplifyJson(users)}/>
                <Button sx={{width: "3rem"}} type={"submit"} variant={"outlined"}>הגש</Button>
            </Box>
        </Form>
    </Box>
}
export default CommanderSoliderPage