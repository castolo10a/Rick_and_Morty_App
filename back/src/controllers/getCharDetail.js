const axios = require("axios");

const getCharDetail = (res, ID) => {
    axios.get(`https://rickandmortyapi.com/api/character/${ID}`)
    .then(result => result.data)
    .then(data => {
        let character = {
            image: data.image,
            name: data.name,
            gender: data.gender,
            status: data.status,
            origin: data.origin,
            species: data.species,
        }
        res.writeHead(200, {'content-type': 'application/json'})
        res.end(JSON.stringify(character))
    })
    .catch(err => 
        res
        .writeHead(500, {'Content-type': 'text/plain'})
        .end(`El personaje con id:${ID} no fue encontrado`)
    )
}

module.exports = getCharDetail;