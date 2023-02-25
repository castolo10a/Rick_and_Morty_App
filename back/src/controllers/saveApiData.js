const axios  = require("axios")
const { Character } = require('../DB_connection');
const URL = "https://rickandmortyapi.com/api/character";

const getApiData = async (URL, character = []) => {
    try {
        if(character.length === 100) return character;
        const { info, results } = (await axios(URL)).data;
        results.forEach(char => {
            if(character.length < 100) character.push({
                id: char.id,
                name: char.name, 
                species: char.species,
                status: char.status,
                origin: char.origin.name,
                gender: char.gender,
                image: char.image
            })
        });
        return getApiData(info.next, character);
    } 
    catch (error) {
        return {error: error.massage}
    }
}

const saveApiData = async () => {
    try {
        const characterAll = await getApiData(URL);
        //console.log("soy saveApiData", characterAll);
        await Character.bulkCreate(characterAll)
    
        return characterAll;
        
    } 
    catch (error) {
        return { error: error.message}
    }
}

module.exports = saveApiData