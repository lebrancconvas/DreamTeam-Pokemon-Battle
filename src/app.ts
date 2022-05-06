import axios, { AxiosResponse } from "axios";

let name, hp, atk, def, spatk, spdef, speed;

const PokemonAPI = async(pokemonname: string) => {
	const response: AxiosResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonname.toLowerCase()}`);
	const data = await response.data;
	return [data.name, data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[3].base_stat, data.stats[4].base_stat, data.stats[5].base_stat];
}

PokemonAPI("bulbasaur")
	.then(data => {
		[name, hp, atk, def, spatk, spdef, speed] = data;
		const PokemonStat = {
			name: name,
			hp: hp,
			atk: atk,
			def: def,
			spatk: spatk,
			spdef: spdef,
			speed: speed
		}
		console.log(PokemonStat);
	})
	.catch(err => {
		console.error(err);
	});

