import {auth} from "../../../../../auth";

const ProfilePage = async () => {
    const session = await auth()

    return <>
        {session?.user?.name}

    </>
}
export default ProfilePage