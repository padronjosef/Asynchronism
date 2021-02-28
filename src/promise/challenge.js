const fetchData = require("../utils/fetchData");

let API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((data) => {
    console.log(`total of characters: ${data.info.count}`);
    const characters = API + data.results[0].id;

    return fetchData(characters);
  })
  .then((data) => {
    let { name, status, species, gender, origin, location } = data;

    console.log(`name: ${name}`);
    console.log(`status: ${status}`);
    console.log(`species: ${species}`);
    console.log(`gender: ${gender}`);
    console.log(`origin: ${origin.name}`);
    console.log(`location: ${location.name}`);

    return fetchData(data.origin.url);
  })
  .then((data) => {
    let promisesResidents = data.residents.map((data) => fetchData(data));
    let recorrer = Promise.all(promisesResidents).then((resolve) => resolve);

    console.log(`dimension: ${data.dimension}`);

    return recorrer;
  })
  .then((data) => {
    let names = "";
    for (character of data) names += `${character.name}, `;

    console.log(`live with: ${names.slice(0, names.length - 2)}.`);
  })
  .catch((err) => console.error(err));
