const Card = require('../models/Card')

//creating card 
const createCard = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json('Title and Description both are required');
        }
        const newCard = new Card({ title: title.toLowerCase(), description })
        await newCard.save()
        res.status(201).json(newCard)
    } catch (err) {
        res.status(500).json('Internal Server Error')
    }
}

//get all cards
const getCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards)
    } catch (err) {
        res.status(500).json('Internal Server Error')
    }
}

//get card by title
const getCardByTitle = async (req, res) => {
    try {
        const title = req.params.title.toLowerCase();
        const card = await Card.findOne({ title });
        if (!card) {
            return res.status(404).json({ error: 'Card not found' })
        }
        res.json(card)
    } catch (err) {
        res.status(500).json('Internal Server Error')
    }
}

module.exports = {
    createCard,
    getCards,
    getCardByTitle,
}