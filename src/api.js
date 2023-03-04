import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

const baseURl = async () =>{
  const response = await axios.get(URL)
  return response.data
}

export {baseURl};

