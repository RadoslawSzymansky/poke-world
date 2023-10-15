'use client'

import { PokemonsRes } from '@/types/api'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type PaginationProps = {
  count: number
  pokemons: PokemonsRes
}

export default function Pagination({ count, pokemons }: PaginationProps) {
  const [isLoading, setIsLoading] = useState(false)
  const searchParams = useSearchParams()
  const limitParam = searchParams.get('limit')
  const offsetParam = searchParams.get('offset')
  const limit = (Number.isInteger(Number(limitParam)) ? +limitParam! : 20) || 20
  const offset = Number.isInteger(Number(offsetParam)) ? +offsetParam! : 0
  const page = offset / limit + 1 || 1

  const lastPageOffset = Math.floor(count / limit) * limit

  const handleClick = () => {
    setIsLoading(true)
    document.querySelectorAll('.pokemon-card')?.forEach((el) => {
      el.classList.add('animate-pulse')
    })
  }

  useEffect(() => {
    setIsLoading(false)
    document.querySelectorAll('.pokemon-card')?.forEach((el) => {
      el.classList.remove('animate-pulse')
    })
  }, [pokemons])

  return (
    <div className={`flex p-3 ${isLoading && 'animate-pulse'}`}>
      <Link
        href={`/?offset=0&limit=${limit}`}
        className={`mr-3 ${!offset || isLoading ? 'text-stone-500' : ''}`}
        onClick={() => {
          handleClick()
        }}
      >
        {`<<`}
      </Link>
      <Link
        href={`/?offset=${offset > 0 ? offset - limit : offset}&limit=${limit}`}
        className={!offset || isLoading ? 'text-stone-500' : ''}
        onClick={() => {
          handleClick()
        }}
      >
        {`<`}
      </Link>
      <div className="mx-auto">Page: {page.toFixed(0)}</div>
      <Link
        href={
          offset >= lastPageOffset
            ? `/?offset=${Math.floor(count / limit) * limit}&limit=${limit}`
            : `/?offset=${page * limit}&limit=${limit}`
        }
        className={
          offset >= lastPageOffset || isLoading ? 'text-stone-500' : ''
        }
        onClick={() => {
          handleClick()
        }}
      >{`>`}</Link>
      <Link
        href={`/?offset=${Math.floor(count / limit) * limit}&limit=${limit}`}
        className={`ml-3 ${
          offset >= lastPageOffset || isLoading ? 'text-stone-500' : ''
        }`}
        onClick={() => {
          handleClick()
        }}
      >{`>>`}</Link>
    </div>
  )
}
