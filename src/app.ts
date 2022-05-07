import axios, { AxiosResponse } from "axios";

interface Stat {
	name: string;
	hp: number;
	atk: number;
	def: number;
	spatk: number;
	spdef: number;
	speed: number;
}

let PokemonDataList: Stat[] = [];

const PokemonAPI = async(pokemonname: string) => {
	const response: AxiosResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonname.toLowerCase()}`);
	const data = await response.data;
	return [data.name, data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[3].base_stat, data.stats[4].base_stat, data.stats[5].base_stat];
}

PokemonAPI("bulbasaur")
	.then(data => {
		const [name, hp, atk, def, spatk, spdef, speed] = data;
		const PokemonStat: Stat = {
			name: name,
			hp: hp,
			atk: atk,
			def: def,
			spatk: spatk,
			spdef: spdef,
			speed: speed
		}
		if(PokemonDataList.length > 5) {
			PokemonDataList.push(PokemonStat);
			console.log(PokemonDataList);
		} else {
			console.log("PokemonDataList is full");
		}
	})
	.catch(err => {
		console.error(err);
	});

