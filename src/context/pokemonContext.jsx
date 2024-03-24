import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const PokemonContext = createContext()

const urlPoke = 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0'

const PokemonsProvider = ({ children}) => {
    const [pokemons, setPokemons] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState('')

    const getPokemons = async () => {
        try {
            const response = await axios.get(urlPoke)
            if (!response.status) {
                throw new Error('Data Not found')
            }
            setPokemons(response.data.results)
            console.log('respuesta: ', response.data)
            console.log('context data: ', pokemons)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() =>{
        getPokemons()
    }, )

    return (
        <PokemonContext.Provider value={{pokemons, setPokemons, selectedPokemon, setSelectedPokemon}}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonsProvider