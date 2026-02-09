const express = require('express'); // Importation de l'outil
const cors = require('cors');
const app = express();

app.use(cors()); // Activation de la sécurité "CORS"

// On crée une "Route" : quand on ira sur /api/hello, le serveur répondra
app.get('/api/hello', (req, res) => {
    res.json({ 
        message: "Salut ! Le Back-end fonctionne parfaitement.",
        status: "Success"
    });
});

// Le serveur écoute sur le port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});