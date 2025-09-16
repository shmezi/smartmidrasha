import {Box, Button} from "@mui/material";
import Form from "next/form";
import {newExpectedLogAction} from "@/app/actions/expectedLogActions";
import SoliderSelector from "@/app/(pages)/commander/homes/SoliderSelector";
import {simplifyJson} from "@/app/(pages)/admin/utils";
import {auth} from "../../../../../../auth";
import {headers} from "next/headers";
import {MidrashaUser} from "@/struct/MidrashaUser";


const CommanderSoliderPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })


    const userQueryResult = await auth.api.listUsers({
        query: {
            filterField: "commanderId",
            filterValue: session?.user?.id
        }
    })
    // const users = userQueryResult.users as MidrashaUser[] | never[]

    return <Box fontSize={"xx-large"}>
        <Form action={newExpectedLogAction}>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>

                {/*<SoliderSelector soldiers={simplifyJson(users)}/>*/}
                <Button sx={{width: "3rem"}} type={"submit"} variant={"outlined"}>הגש</Button>
            </Box>
        </Form>
    </Box>
}
export default CommanderSoliderPage