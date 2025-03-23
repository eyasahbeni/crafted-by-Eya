const express = require('express');
const router = express.Router();
const techStackController = require('../controllers/techStackController');

router.get('/', techStackController.getAllTechStacks);
router.get('/:id', techStackController.getTechStackById);
router.post('/', techStackController.createTechStack);
router.put('/:id', techStackController.updateTechStack);
router.delete('/:id', techStackController.deleteTechStack);

module.exports = router;
