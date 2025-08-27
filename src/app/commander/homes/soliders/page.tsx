import SoliderSelector from "@/app/commander/homes/SoliderSelector";
import {User} from "@/struct/impl/User";
import {Box, Button} from "@mui/material";
import {simplifyJson} from "@/app/admin/utils";
import Form from "next/form";
import {createUserLog} from "@/app/actions/logActions";

const CommanderSoliderPage = async () => {

    const COMMANDER = "0000001" //THIS WILL LATER BE TAKEN FROM AUTH SYSTEM FOR CURRENTLY LOGGED IN USER.
    return <Box fontSize={"xx-large"}>
        <Form action={createUserLog}>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>

                <input type={"hidden"} name={"commanderId"} value={"0000001"}/>

                <SoliderSelector soldiers={simplifyJson(await User.find({commanderId: COMMANDER}))}/>
                <Button sx={{width: "3rem"}} type={"submit"} variant={"outlined"}>הגש</Button>
            </Box>
        </Form>
    </Box>
}
export default CommanderSoliderPage