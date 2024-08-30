import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Pagination } from './Pagination'
import { Button } from './ui/button'

const Controller = ({ title, buttonLink, buttonText, searchParams, pageEnd }) => {
    return (
        <div className='w-ful mb-2 flex overflow-auto justify-between items-center px-2 py-1 '>
            <section>
                <p className='text-lg font-[500]'>{title}</p>
            </section>


            <section className='flex items-center gap-4'>
                {pageEnd && <Pagination pageEnd={pageEnd} searchParams={searchParams} />}
                {buttonLink && <Button asChild>
                    <Link className='gap-2' href={buttonLink}> <Plus className="w-5" />{buttonText}</Link>
                </Button>}
            </section>
        </div>
    )
}

export { Controller }