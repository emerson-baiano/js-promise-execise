const mainContainer = document.querySelector(".container");
const pokemons = [];

/* this is with await method */

// const createCard = (pokemon) => {
//   const pokemonCard = `<div class="card">
//   <img src=${pokemon.sprites.front_default} alt="" />
//   <span>${pokemon.id}</span>
//   <h1>${pokemon.name}</h1>
//   <p>Type: ${pokemon.types[0].type.name}</p>
// </div>`;
//   mainContainer.innerHTML += pokemonCard;
// };

// const getPokemon = async (index) => {
//   const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`);
//   const result = await data.json();
//   return createCard(result);
// };

// for (let index = 1; index <= 151; index++) {
//   getPokemon(index);
// }

/* This is with Promise All method */
for (let index = 1; index <= 151; index++) {
  pokemons.push(`https://pokeapi.co/api/v2/pokemon/${index}/`);
}

let request = pokemons.map((url) => {
  return fetch(url).then((res) => res.json());
});

Promise.all(request).then((res) =>
  res.map((pokemon) => {
    mainContainer.innerHTML += `<div class="card ${pokemon.types[0].type.name}">
    <img src=${pokemon.sprites.front_default} alt="" />
    <span>#${pokemon.id}</span>
    <h1>${pokemon.name}</h1>
    <p>Type: ${pokemon.types[0].type.name}</p>
  </div>`;
  })
);
