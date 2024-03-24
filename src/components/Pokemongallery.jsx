import { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";

const Gallery = () => {
    const {pokemons, setPokemons} = useContext(PokemonContext)
  
    console.log('data context: ', pokemons)
    return (
    <>
        <div className="gallery grid-columns-5 p-3">
        {pokemons.map((pokemon) => (
            <div>
            <section>
                <p> {pokemon.name} </p> {}
                <a href={pokemon.url}>{pokemon.url}</a>
                {}
            </section>
            </div>
        ))
        }
        </div>;
    </>)
}
export default Gallery;
  