import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { pokemonId: string } }
) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/12/`, {})
  const res = await data.json()

  try {
    return NextResponse.json(res, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      {
        message:
          (error as { message: string }).message || 'Something went wrong',
      },
      { status: 500 }
    )
  }
}
