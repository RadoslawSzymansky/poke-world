export type BasicInfo = { name: string; url: string }

export type PokemonsRes = {
  count: number
  previous: string | null
  next: string | null
  results: BasicInfo[]
}

export type PokemonsTypesRes = {
  count: number
  previous: string | null
  next: string | null
  results: {
    name: string
    url: string
    pokemon: { pokemon: { name: string } }[]
  }[]
}

export type Characteristics = {
  descriptions: {
    description: string
    language: BasicInfo
  }[]
  gene_modulo: number
  highest_stat: BasicInfo
  id: number
  possible_values: number[]
}

export type PokemonDetails = {
  abilities: { ability: BasicInfo; is_hidden: false; slot: 1 }[]
  base_experience: number
  forms: BasicInfo[]
  game_indices: { game_index: number; version: BasicInfo }[]
  height: number
  held_items: { item: BasicInfo; version_details: BasicInfo[] }[]
  id: number
  is_default: boolean
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/12/encounters'
  moves: { move: BasicInfo; version_group_details: any }[]
  name: string
  order: number
  // past_types: [] to fill
  species: {
    name: 'butterfree'
    url: 'https://pokeapi.co/api/v2/pokemon-species/12/'
  }
  sprites: {
    back_default: string | null
    back_female: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
    other: {
      dream_world: {
        front_default: string | null
        front_female: null | string
      }
      home: {
        front_default: null | string
        front_female: null | string
        front_shiny: null | string
        front_shiny_female: null | string
      }
      'official-artwork': { front_default: string | null }
    }
    versions: {
      // [key: string]: {} - jak potzrebne bedzie inne generacje
    }
  }
  stats: { base_stat: number; effort: number; stat: BasicInfo }[]
  types: { slot: number; type: BasicInfo }[]
  weight: number
}
