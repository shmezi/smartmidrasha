import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import connectDBIfNotConnected from "@/database";
import React from "react";
import {Box} from "@mui/material";
import {Stack} from "@mui/system";
import Header from "@/components/header/Header";

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
        <html lang="en" dir={"rtl"} style={{width: "100vw", height: "100vh"}}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
              style={{width: "100vw", height: "100vh"}}>


        <Stack spacing={"2"} height={"100vh"} width={"100vw"}>
            <Header/>
            <Box height={"100%"} width={"100%"}>
                {props.children}
            </Box>
        </Stack>
        {/*</ThemeProvider>*/}

        </body>
        </html>
    );
}
