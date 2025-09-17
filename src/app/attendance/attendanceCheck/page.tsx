import {Box} from "@mui/material";
import {Home} from "@/struct/schemas/Home";
import HomeReviewSelector from "@/app/attendance/attendanceCheck/HomeReviewSelector";
import {simplifyJson} from "@/app/admin/utils";
import SoliderSelector from "@/app/attendance/SoliderSelector";
// import {User} from "@/struct/schemas/data/User";
import Form from "next/form";
import {auth} from "../../../../auth";
import {headers} from "next/headers";
import {MidrashaUser} from "@/struct/MidrashaUser";

const HomeReviewPage = async ({params, searchParams}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
    params: Promise<{ slug: string }>
}) => {
    const homes = (await Home.find())
    const queries = await searchParams
    const userFromHome = (await auth.api.listUsers(
        {
            query: {
                filterField: "homeId",
                filterValue: queries.selected as string,
                limit: 10,
                offset: 0
                ,
            },
            headers: await headers()
        },
    )).users.map((user) => {
        return user as MidrashaUser
    })

    return <Box fontSize={"xx-large"} flexDirection={"column"} display={"flex"} justifyContent={"center"}
                alignContent={"center"}>
        <Form action={() => {
        }}>
            <HomeReviewSelector homes={simplifyJson(homes)}/>
            <SoliderSelector soldiers={simplifyJson(userFromHome)}/>
        </Form>
    </Box>
}


export default HomeReviewPage