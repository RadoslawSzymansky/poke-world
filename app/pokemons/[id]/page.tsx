import { Characteristics } from '@/types/api'

async function getData(id: string): Promise<Characteristics> {
  const res = await fetch(process.env.URL + `/api/pokemons/${id}`, {
    cache: 'no-cache',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch pokemon ' + id)
  }

  return res.json()
}

export default async function PokemonPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const pokemon = await getData(id)

  console.log('po', pokemon)

  return (
    <div>
      Pokomon pahge {id}
      <div></div>
    </div>
  )
}
