import {auth} from "../../../../../auth";

const ProfilePage = async () => {
    const session = await auth()
    console.log(session)
    return <>
        {session}

    </>
}
export default ProfilePage