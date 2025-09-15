import {Box, Button} from "@mui/material";
import {Home} from "@/struct/schemas/data/Home";
import HomeReviewSelector from "@/app/(pages)/commander/homes/review/HomeReviewSelector";
import {simplifyJson} from "@/app/(pages)/admin/utils";
import SoliderSelector from "@/app/(pages)/commander/homes/SoliderSelector";
// import {User} from "@/struct/schemas/data/User";
import Form from "next/form";
import {createPresentLog} from "@/app/actions/presentLogActions";

const HomeReviewPage = async ({params, searchParams}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
    params: Promise<{ slug: string }>
}) => {
    const homes = (await Home.find())
    const queries = await searchParams
    // const userFromHome = await User.find({homeId: queries.selected})

    return <Box fontSize={"xx-large"} flexDirection={"column"} display={"flex"} justifyContent={"center"}
                alignContent={"center"}>
        <Form action={createPresentLog}>
            <HomeReviewSelector homes={simplifyJson(homes)}/>
            {/*<SoliderSelector soldiers={simplifyJson(userFromHome)}/>*/}
        </Form>
    </Box>
}


export default HomeReviewPage