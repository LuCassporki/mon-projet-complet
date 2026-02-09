# 1. On part d'une image Node.js toute prête
FROM node:18

# 2. On crée un dossier de travail dans la "boîte"
WORKDIR /app

# 3. On copie les fichiers de config et on installe les outils
COPY package*.json ./
RUN npm install

# 4. On copie tout le reste du code
COPY . .

# 5. On dit à la boîte de s'ouvrir sur le port 5000
EXPOSE 5000

# 6. La commande pour démarrer l'app
CMD ["node", "index.js"]