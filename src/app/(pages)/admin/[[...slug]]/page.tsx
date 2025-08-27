'use server'
import {Box} from "@mui/material";
import React from "react";
import NavigationColumn from "@/app/(pages)/admin/[[...slug]]/comps/navigation/NavigationColumn";
import {UserPanel} from "@/app/(pages)/admin/panel/implementations/UserPanel";
import {BasePanel} from "@/app/(pages)/admin/panel/BasePanel";
import {ObjectUpdatePanel} from "@/app/(pages)/admin/[[...slug]]/comps/objects/ObjectUpdatePanel";
import ObjectSelector from "@/app/(pages)/admin/[[...slug]]/comps/objects/ObjectSelector";
import {redirect} from "next/navigation";
import {HomePanel} from "@/app/(pages)/admin/panel/implementations/HomePanel";


const AdminPage = async ({params, searchParams}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
    params: Promise<{ slug: string }>
}) => {
    const awaitedParams = await params
    if (!awaitedParams.slug || awaitedParams.slug.length < 1)
        redirect("/admin/users")

    const selectedPage = awaitedParams.slug[0]
    const panels = [new UserPanel(), new HomePanel()]
    const mappedPanels = new Map<string, BasePanel>()
    panels.map((panel) => {
        mappedPanels.set(panel.id, panel)
    })

    if (!mappedPanels.has(selectedPage))
        redirect("/admin/users")


    const selectedPanel = mappedPanels.get(selectedPage)
    const dataSource = await selectedPanel?.dataSource()

    return <Box display={"flex"}  flexDirection={"row"}>
        <NavigationColumn options={panels.map((panel) => {
            return {
                id: panel.id,
                icon: panel.icon,
                name: ""
            }
        })}/>

        <ObjectSelector pane={selectedPanel} selectables={dataSource}/>
        <ObjectUpdatePanel searchParams={await searchParams} panel={selectedPanel} selectables={dataSource}/>

    </Box>


}
export default AdminPage