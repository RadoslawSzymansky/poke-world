'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

type PaginationProps = {
  count: number
}

export default function Pagination({ count }: PaginationProps) {
  const searchParams = useSearchParams()

  const limitParam = searchParams.get('limit')
  const offsetParam = searchParams.get('offset')
  const limit = (Number.isInteger(Number(limitParam)) ? +limitParam! : 20) || 20
  const offset = Number.isInteger(Number(offsetParam)) ? +offsetParam! : 0
  const page = offset / limit + 1 || 1

  const lastPageOffset = Math.floor(count / limit)

  return (
    <div className="flex p-3">
      <Link
        href={`/?offset=0&limit=${limit}`}
        className={`mr-3 ${!offset ? 'text-stone-500' : ''}`}
      >
        {`<<`}
      </Link>
      <Link
        href={`/?offset=${offset > 0 ? offset - limit : offset}&limit=${limit}`}
        className={!offset ? 'text-stone-500' : ''}
      >
        {`<`}
      </Link>
      <div className="mx-auto">Page: {page}</div>
      <Link
        href={`/?offset=${page * limit}&limit=${limit}`}
        className={offset >= lastPageOffset ? 'text-stone-500' : ''}
      >{`>`}</Link>
      <Link
        href={`/?offset=${lastPageOffset * limit}&limit=${limit}`}
        className={`ml-3 ${offset >= lastPageOffset ? 'text-stone-500' : ''}`}
      >{`>>`}</Link>
    </div>
  )
}
