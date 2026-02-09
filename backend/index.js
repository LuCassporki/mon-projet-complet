const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json()); // Permet au serveur de lire le JSON envoyé par le front

// 1. Connexion à MongoDB (l'adresse 'database' est définie par Docker)
mongoose.connect('mongodb://database:27017/mon_app')
    .then(() => console.log("Connecté à MongoDB !"))
    .catch(err => console.error("Erreur de connexion :", err));

// 2. Définition du modèle (À quoi ressemble une donnée ?)
const VisiteSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    navigateur: String
});
const Visite = mongoose.model('Visite', VisiteSchema);

// 3. Route pour enregistrer et lire
app.get('/api/hello', async (req, res) => {
    // On enregistre une nouvelle visite à chaque appel
    await Visite.create({ navigateur: req.headers['user-agent'] });
    
    // On compte le nombre total de visites
    const totalVisites = await Visite.countDocuments();
    
    res.json({ 
        message: "Salut ! C'est enregistré en base de données.",
        compteur: totalVisites
    });
});

app.listen(5000, () => console.log("Serveur prêt sur le port 5000"));
