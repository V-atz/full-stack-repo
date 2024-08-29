const express = require("express");
const app = express();
const cors = require('cors');
const port = 7000;
const Card = require('./models/Card')
const mongoUrl = 'mongodb://localhost:27017'
const mongoose = require('mongoose')
const router = require('./routes/cardRoutes')

//middleware
app.use(cors())
app.use(express.json())

//mongodb connection
mongoose.connect(mongoUrl).then(() => {
    console.log('Database Successfully Connected')
}).catch((err) => {
    console.log('Error connecting Database', err)
})

//route
app.use('/api', router)

app.get('/ping', (req, res) => {
    res.send('Server is running')
})

app.listen(port, () => {
    console.log(`Server successfully created at port ${port}`)
})