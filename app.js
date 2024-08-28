
const { MongoClient } = require('mongodb');

const uri = "your_mongodb_connection_string";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

async function connectDB() {
  await client.connect();
  db = client.db('library');
  console.log("Connected to MongoDB");
}

function getDB() {
  if (!db) throw new Error('Must connect to MongoDB first!');
  return db;
}

module.exports = { connectDB, getDB };
















const app = express();
app.get('/', (req, res)=>{

    res.send("Hello");
});




app.get('/produit', (req, res)=>{


    res.json(produit);
});

app.get('/categorie', (req, res)=>{
    res.json(categorie);
});


app.get('/clien', (req, res)=>{
    res.json(clien);
});




app.listen(3000, ()=>{
    console.log("demarer le srever");

});


