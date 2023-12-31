'use client'
import { PokemonsRes, PokemonsTypesRes } from '@/types/api'
import Link from 'next/link'
import pokeballSvg from '@/public/pokeball.png'
import ImageWithFallback from './ImageWithFallback'

type PokemonCardProps = {
  pokemon: PokemonsRes['results'][0]
  types: PokemonsTypesRes['results']
}

export default function PokemonCard({
  pokemon: { name, url },
  types,
}: PokemonCardProps) {
  const pokemonId = url.split('/').reverse()[1]

  return (
    <Link
      href={`/pokemons/${name}`}
      className="pokemon-card relative p-4 rounded bg-gradient-to-b from-yellow1 to-yellow2 shadow-white shadow-sm text-center text-black hover:scale-102 grow=[0] poke-card"
    >
      <div className="absolute left-6 top-6 text-slate-500 italic">
        #{pokemonId}
      </div>
      <div className="bg-grass bg-cover rounded p-4">
        <ImageWithFallback
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonId}.png`}
          width={200}
          height={200}
          alt={`pokemon ${name} image`}
          fallbackSrc={pokeballSvg}
        />
      </div>
      <div className="my-2">{name.charAt(0).toUpperCase() + name.slice(1)}</div>
      <div className="flex justify-center">
        {types.map(({ name: typeName, pokemon: pokemonsInType }) => {
          const isInType = pokemonsInType.some(
            ({ pokemon }) => pokemon.name == name
          )
          return isInType ? (
            <div
              key={typeName}
              className="border bg-white border-gray-500 mr-2 px-2 rounded"
            >
              {typeName}
            </div>
          ) : null
        })}
      </div>
    </Link>
  )
}
