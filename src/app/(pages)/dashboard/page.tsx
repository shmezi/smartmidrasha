'use client'
import {Button} from "@mui/material";

const DashBoardPage = () => {

    return <>
        <Button onClick={async () => {
            await fetch("/api/whatsapp")
        }}>Submit</Button>
    </>
}
export default DashBoardPage