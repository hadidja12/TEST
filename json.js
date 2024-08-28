const express = require('express');
const app = require('./app');

const app = express();
app.use(express.json());   


app().catch(console.error);

// Endpoint: Créer un livre
app.post('/livre', async (req, res) => {
  try {
    const app = getDB();
    const result = await app.collection('livre').insertOne(req.body);
    res.status().send(result.ops[0]);
  } catch (err) {
    res.status(500).send({ message: 'Erreur ' });
  }
});

app.get('/livre/:id', async (req, res) => {
    try {
      const app = getDB();
      const book = await db.collection('books').findOne({ _id: new ObjectId(req.params.id) });
      if (!book) return res.status(404).send({ message: 'Livre non trouvé' });
      res.send(book);
    } catch (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération du livre' });
    }
  });
  
  
  app.put('/livre/:id', async (req, res) => {
    try {
      const app = getDB();
      const result = await db.collection('books').updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
      if (result.matchedCount === 0) return res.status(404).send({ message: 'Livre non trouvé' });
      res.send({ message: 'Livre mis à jour' });
    } catch (err) {
      res.status(500).send({ message: 'Erreur mis a jours' });
    }
  });
  app.delete('/livre/:id', async (req, res) => {
    try {
      const app = getDB();
      const result = await app.collection('books').deleteOne({ _id: new ObjectId(req.params.id) });
      if (result.deletedCount === 0) return res.status(404).send({ message: 'Livre non trouvé' });
      res.send({ message: 'Livre supprimé' });
    } catch (err) {
      res.status(500).send({ message: 'Erreur ' });
    }
  });
  
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Serveur demaere sur le port ${PORT}`);
  });