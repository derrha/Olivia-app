const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const cors = require('cors');

const uri = "mongodb+srv://mermoliaalan:Parana1160@olivia-db0.ga9jd7u.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const idUser = '654e8bde67ea89cccdb8f092';

app.use(express.json());
app.use(cors());

const userSchema = new mongoose.Schema({
    dtRegistro: Date,
    estaDurmiendo: Boolean
});

const Users = mongoose.model('User', userSchema);

app.post('/', async (req, res) => {
    console.log('Solicitud recibida:', req.body);

    const filter = { _id: idUser };
    const update = { dtRegistro: new Date(), estaDurmiendo: req.body.estaDurmiendo };
  
    try {
      let doc = await Users.findOneAndUpdate(filter, update, { new: true, upsert: true });
  
      if (!doc) {
        await Users.create({ dtRegistro: new Date(), estaDurmiendo: req.body.estaDurmiendo });
      }
  
      res.send('Usuario actualizado correctamente! 🫡');
    } catch (e) {
      res.status(500).send('¡Error al actualizar! 🥵' + e);
    }
  });  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
