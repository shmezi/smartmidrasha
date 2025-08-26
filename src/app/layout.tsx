import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import connectDBIfNotConnected from "@/database";
import React from "react";
import {Box, Typography} from "@mui/material";
import SynagogueIcon from '@mui/icons-material/Synagogue';
import NavBarButton from "@/app/nav/NavbarButton";

await connectDBIfNotConnected()
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Smart Midrasha",
    description: "Smart dashboard for Har Gilo Midrasha",
};

export default function RootLayout(props: {
    dialog: React.ReactNode,
    children: React.ReactNode;
}) {


    return (
        <html lang="en" dir={"rtl"} style={{width: "100%", height: "100%"}}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
              style={{width: "100%", height: "100%"}}>

        <Box alignContent={"center"} alignItems={"center"} display={"flex"} height={"%"} width={"100%"}
             bgcolor={"rgba(175,156,255,0.58)"}>
            <NavBarButton/>
            <Box alignItems={"center"} width={"100%"} justifyContent={"center"} alignContent={"center"} display={"flex"}
                 flexDirection={"row"}>
                <SynagogueIcon sx={{marginLeft: "0.3rem", color: "whitesmoke"}}/>
                <Typography color={"white"} fontSize={"x-large"}>המדרשה החכמה</Typography>
            </Box>
        </Box>
        <Box>
            {props.children}
        </Box>
        </body>
        </html>
    );
}
