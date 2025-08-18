import {NextRequest} from "next/server";
import {createUser} from "@/db/users";
import {SOLIDER_ICON} from "@/app/admin/[[...slug]]/comps/const/icons";
import {Job} from "@/struct/User";


export const POST = async (
    req: NextRequest,
    {params}: { params: Promise<{ classID: string }> }) => {
    await createUser({_id: "testing", icon: SOLIDER_ICON, id: "wow", jobs: [Job.commander,], name: "bob"})
    return Response.json({id: "Hello"})
}

