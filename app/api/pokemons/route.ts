import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const limitParam =  request.nextUrl.searchParams.get('limit');
  const offsetParam =  request.nextUrl.searchParams.get('offset');

  const limit = Number.isInteger(+limitParam!) ? +limitParam! : 20;
  const offset = Number.isInteger(+offsetParam!) ? +offsetParam! : 0;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  const pokemons = await res.json()

  const typesRes = await fetch('https://pokeapi.co/api/v2/type')
  const dataTypesRes = await typesRes.json()
  const types = [];

  for await (const result of dataTypesRes.results) {
    const typesRes = await fetch(result.url)
    const type = await typesRes.json()
    types.push(type);
  }

  try {
    return NextResponse.json({ pokemons, types }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: (error as {message: string}).message || 'Something went wrong' }, { status: 500 })
  }
}
