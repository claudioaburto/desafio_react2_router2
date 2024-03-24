import imgError from '../assets/img/imgError.png'

const notFound = () => {
    return (
        <>
            <div className='notFound'>
                <h1>Error 404</h1>
                <h2>Pagina no encontrada!!!</h2>
                <img src={imgError} alt="Not found img" width="300px" />
            </div>
        </>
    )
}

export default notFound