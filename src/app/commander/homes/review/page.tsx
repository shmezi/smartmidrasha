import {Box, Button} from "@mui/material";
import {Home} from "@/struct/impl/Home";
import HomeReviewSelector from "@/app/commander/homes/review/HomeReviewSelector";
import {simplifyJson} from "@/app/admin/utils";
import SoliderSelector from "@/app/commander/homes/SoliderSelector";
import {User} from "@/struct/impl/User";
import Form from "next/form";
import {createGeneralLog} from "@/app/actions/generalLogActions";

const HomeReviewPage = async ({params, searchParams}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
    params: Promise<{ slug: string }>
}) => {
    const homes = (await Home.find())
    const queries = await searchParams
    const userFromHome = await User.find({homeId: queries.selected})

    return <Box fontSize={"xx-large"} flexDirection={"column"} display={"flex"} justifyContent={"center"}
                alignContent={"center"}>
        <Form action={createGeneralLog}>
            <HomeReviewSelector homes={simplifyJson(homes)}/>
            <SoliderSelector soldiers={simplifyJson(userFromHome)}/>
        </Form>
    </Box>
}


export default HomeReviewPage