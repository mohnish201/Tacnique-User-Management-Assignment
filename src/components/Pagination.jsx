'use client'

import { ChevronLeft, ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Pagination = ({ pageEnd, searchParams }) => {

    const pathname = usePathname();


    const page = +searchParams?.page || 1

    return <div className="flex items-center gap-2 bg-white p-2">
        <Link className={`bg-primary ${page <= 1 && 'bg-gray-400 text-gray-300 pointer-events-none'} text-primary-foreground rounded-lg p-1`} href={{ pathname: pathname, query: { ...searchParams, page: page - 1 } }}>
            <ChevronLeft />
        </Link>
        <p>
            {page || 1} of {pageEnd}
        </p>
        <Link className={`bg-primary ${page >= pageEnd && 'bg-gray-400 text-gray-300 pointer-events-none'}  text-primary-foreground rounded-lg p-1`} href={{ pathname: pathname, query: { ...searchParams, page: page + 1 } }}>
            <ChevronRight />
        </Link>
    </div>
}

export { Pagination }