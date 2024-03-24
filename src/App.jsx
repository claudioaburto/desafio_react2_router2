import { Route, Routes } from "react-router-dom";
import PokeNavbar from "./components/NavBar";
import Not_found from './views/NotFound'
import Home from './views/home'
import Pokemones from "./views/Pokemones";
import PokeDex from "./views/PokemonDetails";

function App() {

  return (
    <>
      <PokeNavbar/>

      <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/Pokemones"
            element={<Pokemones/>}
          />
          <Route
            path="/Pokemones/:name"
            element={<PokeDex/>}
          />
          <Route
            path="*"
            element={<Not_found/>} />
        </Routes>
    </>
  )
}

export default App
