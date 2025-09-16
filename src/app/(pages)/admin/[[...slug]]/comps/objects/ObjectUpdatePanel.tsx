import {Box} from "@mui/material";
import {Selectable} from "@/struct/Selectable";
import {BasePanel} from "@/app/(pages)/admin/panel/BasePanel";

export const ObjectUpdatePanel = async (
    {
        panel,
        selectables,
        searchParams
    }: {
        panel: BasePanel | undefined
        selectables: Selectable[] | undefined,
        searchParams: { [key: string]: string | string[] | undefined }

    }) => {
    if (!selectables || !panel)
        return <Box margin={"3rem"} border={"purple solid"} width={"100%"}/>


    const selected = searchParams.selected

    const selectedObject = selectables.find((o) => {
        return o.id == selected
    })
    if (!selectedObject || !panel)
        return <Box margin={"3rem"} border={"purple solid"} width={"100%"}/>

    return <Box margin={"3rem"} border={"purple solid"} width={"100%"}>
        <Box margin={"0.5rem"}>
            {panel.editPane(selectedObject)}

        </Box>
    </Box>
}