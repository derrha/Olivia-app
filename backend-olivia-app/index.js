const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const uri = "mongodb+srv://mermoliaalan:Parana1160@olivia-db0.ga9jd7u.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const idUser = '654e8bde67ea89cccdb8f092';

app.use(express.json());

const userSchema = new mongoose.Schema({
    dtRegistro: Date,
    estaDurmiendo: Boolean
});

const Users = mongoose.model('User', userSchema);

app.post('/', async (req, res) => {
    const filter = { _id: idUser };
    const update = { dtRegistro: new Date(), estaDurmiendo: req.body.estaDurmiendo };

    try {
        let doc = await Users.findOneAndUpdate(filter, update, { new: true, upsert: true });

        if (!doc) {
            await Users.create({ dtRegistro: new Date(), estaDurmiendo: req.body.estaDurmiendo });
        }

        res.send('Usuario insertado! 🫡');
    } catch (e) {
        res.send('¡Error! 🥵' + e);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
