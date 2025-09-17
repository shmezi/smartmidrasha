import React from "react";
import {Selectable} from "@/struct/Selectable";
import Form from "next/form";
import {DialogTitle, FormControl} from "@mui/material";

export abstract class BasePanel {
    abstract id: string
    abstract icon: React.ReactNode
    abstract dataSource: () => Promise<Selectable[]>
    abstract creationPane: React.ReactNode
    abstract dialogTitle: string
    abstract editPane: (selected: Selectable) => React.ReactNode
    abstract action: (formData: FormData) => Promise<void>
    getCreationPane = () => <>
        <Form id={"creation-dialog"} action={this.action}>
            <FormControl fullWidth>
                <DialogTitle>{this.dialogTitle}</DialogTitle>
                {this.creationPane}
            </FormControl>
        </Form>
    </>

}