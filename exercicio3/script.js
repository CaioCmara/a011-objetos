const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
console.log(pokemon1) //teste
//a
const pokemonNovo = {...pokemon1}
pokemonNovo.nome = "Squirtle"
pokemonNovo.tipo = "Água"

console.log(pokemonNovo) //teste2
// b
pokemon1.ataques = []
pokemon1.ataques.push({nome: "investida", dano: "40", tipo: "normal", precisão: 100})

//c
pokemonNovo.ataques = {...pokemon1.ataques}
//d
pokemon1.ataques.push({Nome: "folha", dano: 45, precisão: 100 })
//e
pokemonNovo.ataques.push({nome: "Jato de água", dano: 40, precisão: 100})

console.log(pokemonNovo)
