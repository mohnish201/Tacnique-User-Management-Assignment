'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash2 } from "lucide-react"

import React, { useState } from 'react'
import { toast } from "react-hot-toast"
import { Button } from "./ui/button"

const DeleteButton = ({ onDelete }) => {

    const [loading, setLoading] = useState(false)

    const onDeleteFn = async () => {
        setLoading(true)
        try {
            await onDelete()
            toast.success('Deleted Successfully')

        } catch (error) {

        }
        setLoading(false)
    }
    return <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button variant='destructive' size="icon"><Trash2 strokeWidth={1.5} /></Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your user Data
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction asChild>
                    <Button variant="destructive" onClick={onDeleteFn}>Delete</Button>
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
}

export { DeleteButton }