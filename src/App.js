import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./components/Pokemon";

const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=100&limit=50";

const App = () => {

  const [pokemons, setPokemons] = useState(null)

  const fetchPokemons = async () => {
    const {results} = (await axios.get(API_URL)).data;

    setPokemons(results)
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (<div className="container mx-auto mt-12 bg-gray-100 p-7 rounded">
  
    {!pokemons && <h1>Loading ...</h1>}
    
    <ul className="grid grid-cols-12 gap-3">
      {
        pokemons &&
        pokemons.map((item, index) =>{
          return(
             <Fragment key={`pokemon-${index}`}>
             <Pokemon name={item.name} url={item.url}/>
             </Fragment>
             )
        })
      }
    </ul>
  </div>);
};

export default App;
