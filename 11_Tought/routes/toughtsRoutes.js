const express = require('express')
const router = express.Router();
const ToughtsController = require('../controllers/ToughtsController')
const checkAuth = require('../helpers/auth').checkAuth

router.get('/dashboard', checkAuth, ToughtsController.dashboard) // Middleware CheckAuth adicionado à rota
router.get('/', ToughtsController.showToughts)

module.exports = router