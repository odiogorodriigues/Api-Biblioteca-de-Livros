const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.get('', livroController.getLivros);
router.get('/:id', livroController.getOneLivros);
router.post('', livroController.createLivros);
router.put('/:id', livroController.updateLivro);
router.delete('/:id', livroController.removeLivro);	

module.exports = router;