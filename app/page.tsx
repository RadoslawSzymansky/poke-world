import Pagination from '@/components/Pagination'
import PokemonCard from '@/components/PokemonCard'
import { PokemonsRes, PokemonsTypesRes } from '@/types/api'

async function getData({ limit, offset }: Props['searchParams']): Promise<{
  pokemons: PokemonsRes
  types: PokemonsTypesRes['results']
}> {
  const res = await fetch(
    process.env.URL + `/api/pokemons?limit=${limit}&offset=${offset}`,
    { cache: 'no-cache' }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch pokemons')
  }

  return res.json()
}

type Props = {
  searchParams: {
    limit?: number
    offset?: number
  }
}

export default async function Home(props: Props) {
  const { pokemons, types } = await getData(props.searchParams)

  return (
    <main className="container max-w-screen-lg mx-auto">
      <div className="pokemons-wrapper flex flex-wrap gap-4">
        {pokemons.results.map(({ name, url }) => {
          return (
            <PokemonCard key={name} pokemon={{ name, url }} types={types} />
          )
        })}
        {!pokemons?.results.length && (
          <div className="min-h-6 text-center center w-full text-xl my-8">
            No <br /> data
          </div>
        )}
      </div>
      <Pagination count={pokemons.count} pokemons={pokemons} />
    </main>
  )
}
