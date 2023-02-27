const express = require('express');
const router = express.Router();
const { getAllFavs } = require('../controllers/getAllFavs');
const { getCharById } = require('../controllers/getCharById');
const { deleteChar } = require('../controllers/deleteChar');
const { getAllChars } = require('../controllers/getAllChars');
const postFavorite = require('../controllers/postFavorite')

router.get('/allCharacters', async(req, res)=> {
    try {
        const allCharacters = await getAllChars();
        //console.log(allCharacters);
        res.status(200).json(allCharacters);
    } 
    catch (error) {
        res.status(404).json({error: error.message})
    }
})



// router.get('/detail/:detailId', deleteCharacter);

router.get('/character/:id', getCharById);


router.post("/fav", async (req, res)=>{
    try {
        const characterFav = await postFavorite(req.body);
        if(characterFav.error) throw new Error(characterFav.error)

        return res.status(200).json(characterFav);
    } 
    catch (error) {
        return res.status(400).json({ error: error.masage })
    }
});


router.get('/fav', async (req, res) => {
    try {
        const allFavorites = await getAllFavs();
        if(allFavorites.error) throw new Error(allFavorites.error);
        return res.status(200).json(allFavorites);
    } 
    catch (error) {
        return res.status(404).json({error:error.message});
    }
})


router.delete('/fav/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const deleteFav = await deleteChar(parseInt(id));
        if(deleteFav.error) throw new Error(deleteFav.error);

        return res.status(200).json(deleteFav);
    } catch (error) {
        return res.status(404).json({ error: error.message});
    }
})



module.exports = router;