const express = require('express')
const { createCard, getCards, getCardByTitle } = require('../controllers/cardController')

const router = express.Router()

//post
router.post('/cards', createCard)

//get
router.get('/cards', getCards)
router.get('/cards/:title', getCardByTitle)

module.exports = router