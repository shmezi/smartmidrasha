import {Card, Grid} from "@mui/material";
import React from "react";

const Widget = (
    {
        children,
        width,
        aspectRatio,

    }: {
        children: React.ReactNode | undefined
        width: number,
        aspectRatio: number
    }) => {
    return <Grid size={width}>
        <Card sx={{aspectRatio: (aspectRatio)}}>
            {children}
        </Card>
    </Grid>

}
export default Widget