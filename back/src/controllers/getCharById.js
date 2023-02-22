const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await axios.get(`${URL}${id}`)
        const data = response.data
        const character = {
            id: data.id,
            name: data.name,
            species: data.species,
            image: data.image,
            gender: data.gender
        }
        res.status(200).json(character)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {getCharById};