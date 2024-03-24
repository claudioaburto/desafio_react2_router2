import Gallery from "../components/Pokemongallery";
import Pikachu from '../assets/img/Pikachu.png'

const Home = () => {
  return (
    <div className="App">
      <h1 className="m-3">Bienvenido Maestro Pokemón</h1>
        <img src={Pikachu} alt="Pikachu_picture" width="500px"/>
      {}
    </div>
  );
};
export default Home;