import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import Poke_info from "../components/PokeInfo";

const PokeDex = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState({})

    const urlPoke = 'https://pokeapi.co/api/v2/pokemon'

    const getPokemon = async (name) => {
        try {
            const response = await axios.get(`${urlPoke}/${name}`)
            if (!response.status) {
                throw new Error('Data Not found')
            }
            setPokemon(response.data)
            console.log('Pokemon data: ', response.data)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getPokemon(name)
    }, [name])

    return(
        <>
            <Poke_info Pokemon={pokemon}/>
        </>
    )
}

export default PokeDex