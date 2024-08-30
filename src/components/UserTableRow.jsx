'use client'

import { deleteUserById } from "@/actions/users.actions"
import { Edit, Edit3 } from "lucide-react"
import Link from "next/link"
import { toast } from "react-hot-toast"
import { DeleteButton } from "./DeleteButton"
import { Button } from "./ui/button"
import { TableCell, TableRow } from "./ui/table"

const UserTableRow = ({ data }) => {

    const onDelete = async () => {
        try {
            await deleteUserById(data._id)
        } catch (error) {

        }
    }

    return <TableRow>
        <TableCell className="min-w-20">
            <img src={data?.profileImage} className="w-10 h-10 rounded-full object-contain" />
        </TableCell>
        <TableCell>{data?.name}</TableCell>
        <TableCell>{data?.email}</TableCell>
        <TableCell className="min-w-36">{data?.dateofBirth}</TableCell>
        <TableCell>{data?.phone}</TableCell>
        <TableCell className="space-x-2 flex items-center">
            <Button variant="outline" asChild>
                <Link href={`/users/update/${data?._id}`}>
                    <Edit />
                </Link>
            </Button>
            <DeleteButton onDelete={onDelete} />
        </TableCell>
    </TableRow>
}

export default UserTableRow