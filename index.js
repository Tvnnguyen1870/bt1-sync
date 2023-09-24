import  axios  from "axios";

async function getPokemon() {
    try {
      const getPokemonData = await axios.get("https://pokeapi.co/api/v2/pokemon");
      console.log(getPokemonData.data)
    } catch (err) {
      console.log(err.message)
    }
  }
  
getPokemon();