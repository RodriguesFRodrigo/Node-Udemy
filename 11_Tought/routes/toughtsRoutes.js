const express = require('express')
const router = express.Router();
const ToughtsController = require('../controllers/ToughtsController')
const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth, ToughtsController.createTought) // Middleware CheckAuth adicionado à rota
router.post('/add', checkAuth, ToughtsController.createToughtPost) // Middleware CheckAuth adicionado à rota
router.get('/edit/:id', checkAuth, ToughtsController.updateTought) // Middleware CheckAuth adicionado à rota
router.post('/edit', checkAuth, ToughtsController.updateToughtPost) // Middleware CheckAuth adicionado à rota
router.get('/dashboard', checkAuth, ToughtsController.dashboard) // Middleware CheckAuth adicionado à rota
router.post('/remove', checkAuth, ToughtsController.removeTought) // Middleware CheckAuth adicionado à rota
router.get('/', ToughtsController.showToughts)

module.exports = router