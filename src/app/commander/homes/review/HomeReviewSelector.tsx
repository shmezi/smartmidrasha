'use client'
import {IHome} from "@/struct/impl/Home";
import {Box, IconButton, Typography} from "@mui/material";
import {useState} from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {useRouter} from "next/navigation";
import useOnMount from "@mui/utils/useOnMount";
import DoneAllIcon from '@mui/icons-material/DoneAll';

const HomeReviewSelector = (props: { homes: IHome[] }) => {

    const router = useRouter()

    const [selected, setSelected] = useState(0)
    useOnMount(() => {
        router.push(`?selected=${props.homes[0].id}`)
    })
    const changeSelectedTo = (index: number) => {
        router.push(`?selected=${props.homes[index].id}`)
        setSelected(index)
    }

    let lastIcon
    if (selected == props.homes.length - 1)
        lastIcon = <IconButton type={"submit"}><DoneAllIcon fontSize={"large"}></DoneAllIcon></IconButton>
    else
        lastIcon = <NavigateBeforeIcon fontSize={"large"} onClick={() => {
            if (selected == props.homes.length - 1)
                return
            changeSelectedTo(selected + 1)
        }}/>
    let startOpacity
    if (selected == 0)
        startOpacity = 0
    else
        startOpacity = 100


    return <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
        <NavigateNextIcon fontSize={"large"} sx={{opacity: startOpacity}} onClick={() => {
            if (selected == 0)
                return
            changeSelectedTo(selected - 1)
        }}/>

        <Typography fontSize={"xx-large"}>{props.homes[selected].name}</Typography>

        {lastIcon}
    </Box>
}
export default HomeReviewSelector