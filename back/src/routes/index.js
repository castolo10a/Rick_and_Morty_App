const express = require('express');
const router = express.Router();
const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } = require('../controllers/getCharDetail');

let favs = []; 

router.get('/character/:id', getCharById);

router.get('/detail/:detailId', getCharDetail);

router.post('/fav', (req, res)=> {
    favs.push(req.body);
    res.status(200).send("Se guardó a favoritos el personaje");
})


router.get('/fav', (req, res) => {
    res.status(200).json(favs);
})


router.delete('/fav/:id', (req, res) => {
    const { id } = req.params;

    let characterFilter = favs.filter(char => char.id !== Number(id))
    favs = characterFilter;

    res.status(200).send("El personaje se elimino de favoritos");
})

module.exports = router;
