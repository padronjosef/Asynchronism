const fetchData = require('../utils/fetchData')

let API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then (data => {
    console.log(`total of characters: ${data.info.count}`)
    const characters = (API + data.results[0].id)
    return fetchData(characters)
  })
  .then (data => {
    let {name, status, species, gender, origin, location} = data
    console.log(`name: ${name}`)
    console.log(`status: ${status}`)
    console.log(`species: ${species}`)
    console.log(`gender: ${gender}`)
    console.log(`origin: ${origin.name}`)
    console.log(`location: ${location.name}`)

    return fetchData(data.origin.url)
  })
  .then (data => {
    console.log(`dimension: ${data.dimension}`)
    let recorrer = Promise.all(data.residents.map(data => fetchData(data)))
      .then((resolve) => (resolve))
    return recorrer
  })
  .then (data => {
    let names = "";
    for (character of data) {
      names += `${character.name}, `
    }
    console.log(`live with: ${names}`)
    let punto = names.length
    console.log(names[punto-1])
  })
  .catch (err => console.error(err))
