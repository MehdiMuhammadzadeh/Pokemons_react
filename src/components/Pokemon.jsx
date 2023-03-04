import axios from "axios";
import React, { useEffect, useState } from "react";

function Pokemon(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(props.url).then(({ data }) => {
      setPokemon({
        type: data.types[0].type.name,
        img: data.sprites.front_default,
      });
    });
  }, []);

  return (
        <li className={`${pokemon.type} py-2 col-span-6 md:col-span-3 lg:col-span-2 shadow rounded flex flex-col items-center`}>
            <img className="bg-white p-3 rounded-full" src={pokemon.img} alt="Pokemon Picture" />
            <h1>{props.name}</h1>
            <span className="p-1 my-2 rounded bg-white ">{pokemon.type}</span>
        </li>
  );
}

export default Pokemon;
