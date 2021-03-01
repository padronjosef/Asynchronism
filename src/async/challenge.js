const fetchData = require("../utils/fetchData");

let API = "https://rickandmortyapi.com/api/character/";

const anotherFuction = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${API}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);
    const residentsPromises = origin.residents.map((data) => fetchData(data));
    const residents = await Promise.all(residentsPromises).then((resolve) => resolve);

    let livingWith = "";
    for (names of residents) livingWith += `${names.name}, `;

    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
    console.log(`Live With: ${livingWith.slice(0, livingWith.length - 2)}.`);

  } catch {console.error}
};

anotherFuction(API);
