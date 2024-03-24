import Container from "react-bootstrap/esm/Container"


const infoPokemon = ({Pokemon}) =>{
    const img_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Pokemon.id}.png`

    return (
        <>
            <h1 className="m-3"></h1>

            <section className="Pokedex">
                <Container className="m-2">
                    <img src={img_url} alt="" />
                </Container>
                <Container>
                    <h3 style={{textTransform: 'capitalize'}}>{Pokemon.name}</h3>
                    <h6 className="d-flex flex-row justify-content-start">Type: {Pokemon.types?.map((type)=>(
                                    <li className="m-2">{type.type.name}</li>
                                ))}</h6>
                    <h6>Height: {Pokemon.height}</h6>
                    <h6>Weight: {Pokemon.weight}</h6>
                    <h6>Stats: </h6>
                    <ul className="d-flex flex-column justify-content-start">
                        {Pokemon.stats?.map((stat)=>(
                                    <li>{stat.stat.name}: {stat.base_stat}</li>
                            ))}
                    </ul>
                </Container>
            </section>
        </>
    )
}

export default infoPokemon