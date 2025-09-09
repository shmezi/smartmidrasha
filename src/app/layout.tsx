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
        <html lang="en" dir={"rtl"} style={{width: "100%", height: "100%"}}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
              style={{width: "100%", height: "100%"}}>


        <Stack spacing={"2"}>
            <Header/>
            <Box>
                {props.children}
            </Box>
        </Stack>
        {/*</ThemeProvider>*/}

        </body>
        </html>
    );
}
