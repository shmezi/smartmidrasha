// noinspection t

import {Box, Grid, List, Typography} from "@mui/material";
import Widget from "@/app/attendance/dash/widget/Widget";

import CircleIcon from '@mui/icons-material/Circle';

const CommanderReviewDash = async () => {
    const dateToday = new Date().toLocaleDateString()
    // const allSoldiers: IUser[] = await User.find({jobs: {$all: ["DEFAULT"]}})
    // const allCommanders: IUser[] = await User.find({jobs: {$all: ["COMMANDER"]}})

    // const attendanceLogArray: IAttendanceLog[] = await ExpectedLog.find({date: dateToday})
    //
    // const commandersThatSubmittedLog = attendanceLogArray.map((log) => {
    //     return log.commanderId
    // })
    //
    // const presentSoldiers = attendanceLogArray.map((attendance) => {
    //     return attendance.present
    // }).flat(1)
    //
    //
    // const generalAttendanceLog: IAttendanceLog[] = await PresentLog.find({date: dateToday})
    // const attendingSoliders = generalAttendanceLog.map((attendance) => {
    //     return attendance.present
    // }).flat(1)


    // const missingSoliders = allSoldiers.filter((user) => {
    //     return (presentSoldiers.includes(user._id) && !attendingSoliders.includes(user._id)) || (attendingSoliders.length == 0)
    // })


    return <Grid spacing={"0.4rem"} padding={"1rem"} container display={"flex"} height={"100%"} alignItems={"center"}>
        <Widget width={12} aspectRatio={9}>
            <Box height={"100%"} display={"flex"} flexDirection={"row"} alignItems={"center"} alignContent={"center"}>

                <CircleIcon
                    sx={{
                        marginLeft: "0.4rem",
                        marginRight: "0.4rem",
                        fontSize: "x-small",
                        // color: generalAttendanceLog.length == 0 ? "red" : "green"
                    }}/>
                <Typography sx={{textAlign: "right"}}>מצב בדיקת דירות</Typography>
            </Box>
        </Widget>
        <Widget width={6} aspectRatio={1}>
            <Typography sx={{textAlign: "right"}}>חיילים נאדרים:</Typography>

            <List>
                {/*{missingSoliders.map((userId) => {*/}

                {/*    return <ListItem key={userId._id}>*/}
                {/*        <ListItemText dir={"rtl"} sx={{textAlign: "right"}}>{allSoldiers.filter((user) => {*/}
                {/*            return user._id == userId._id*/}
                {/*        })[0].name}</ListItemText>*/}
                {/*    </ListItem>*/}
                {/*})}*/}

            </List>
        </Widget>
        <Widget width={6} aspectRatio={1}>
            <Typography sx={{textAlign: "right"}}>מפקדים</Typography>

            <List>
                {/*{allCommanders.map((attendance) => {*/}

                {/*    return <ListItem key={attendance._id}>*/}
                {/*        <ListItemText dir={"rtl"} sx={{textAlign: "right"}}>*/}
                {/*            <CircleIcon*/}
                {/*                sx={{*/}
                {/*                    marginLeft: "0.4rem",*/}
                {/*                    fontSize: "x-small",*/}
                {/*                    color: commandersThatSubmittedLog.includes(attendance._id) ? "green" : "red"*/}
                {/*                }}/>*/}
                {/*            {attendance.name}*/}
                {/*        </ListItemText>*/}
                {/*    </ListItem>*/}
                {/*})}*/}

            </List>
        </Widget>
        <Widget width={12} aspectRatio={1}>
            <Typography sx={{textAlign: "right"}}>חיילים</Typography>

            <List>
                {/*{allSoldiers.map((soldier) => {*/}
                {/*    let color*/}

                {/*    if (attendingSoliders.includes(soldier._id))*/}
                {/*        color = "green"*/}
                {/*    if (missingSoliders.includes(soldier))*/}
                {/*        color = "red"*/}
                {/*    if (!presentSoldiers.includes(soldier._id))*/}
                {/*        color = "gray"*/}

                {/*    return <ListItem key={soldier._id}>*/}
                {/*        <ListItemText dir={"rtl"} sx={{textAlign: "right"}}>*/}
                {/*            <CircleIcon*/}
                {/*                sx={{*/}
                {/*                    marginLeft: "0.4rem",*/}
                {/*                    fontSize: "x-small",*/}
                {/*                    color: color*/}
                {/*                }}></CircleIcon>*/}
                {/*            {soldier.name}*/}
                {/*        </ListItemText>*/}
                {/*    </ListItem>*/}
                {/*})}*/}

            </List>
        </Widget>


    </Grid>

}
export default CommanderReviewDash