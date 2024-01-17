import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose, { Schema } from 'mongoose'

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

const setSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    start: { type: Number, required: true },
    heart: { type: Number, required: true },
    text: { type: String, required: true },

});

const Sets = mongoose.model('Sets', setSchema);




app.get('/sets', async (req, res) => {
    try {
        const sets = await Sets.find({})
        res.send(sets)
    } catch (error) {
        res.status(500).json({ messaage: error })
    }

})

app.get('/sets/:id', async (req, res) => {
    try {
        const sets = await Sets.findById(req.params.id)
        res.send(sets)
    } catch (error) {
        res.status(500).json({ messaage: error })
    }

})


app.post('/sets', async (req, res) => {
    try {
        const set = new Sets({
            image: req.body.image,
            title: req.body.title,
            start: req.body.start,
            heart: req.body.heart,
            text: req.body.text
        })

        await set.save()
        res.send({ message: "created" })
    } catch (error) {
        res.status(500).json({ messaage: error })
    }


})


app.delete('/sets/:id', async (req, res) => {
    try {
        const sets = await Sets.findByIdAndDelete(req.params.id)
        res.status(200).json({ messaage: "deleted" })
    } catch (error) {
        res.status(500).json({ messaage: error })
    }

})



const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(url)
    .then(() => console.log('Connected!'))
    .catch(err => console.log("db not connect" + err))

app.listen(port, () => {
    console.log(`Example app listening on port `+port)
})