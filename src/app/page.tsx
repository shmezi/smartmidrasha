'use client'
import {headers} from "next/headers";
import {auth} from "../../auth";
import {authClient} from "@/lib/client";

const Home =  () => {
    const session =  authClient.getSession()
    console.log(session)
    return <>
    </>

}

export default Home