# mon-projet-complet
testApp
Voici ton Mémo Ultime : Architecture Fullstack A à Z. Tu peux copier ce contenu dans un fichier MEMO.md à la racine de ton projet pour toujours avoir la structure sous les yeux.

📑 MÉMO : ARCHITECTURE & DÉPLOIEMENT (A à Z)Ce document récapitule la mise en place d'une application isolée, sécurisée et prête pour la production.

🏗️ 1. Structure du Projet
Plaintext
/mon-projet
├── backend/           # API Node.js + Dockerfile
├── frontend/          # HTML/JS (Interface)
├── gateway/           # Configuration Nginx (Le Gardien)
└── docker-compose.yml # Chef d'orchestre

🟢 2. Le Back-End (API)
Rôle : Traiter les données.
Techno : Node.js / Express.
Sécurité : Utiliser le module cors pour autoriser les requêtes.
Conteneur : Un Dockerfile qui installe Node et lance index.js.

🔵 3. Le Front-End (Interface)
Rôle : Afficher l'info à l'utilisateur.
Techno : HTML/JS (ou React/Vue).
Appel API : Utiliser fetch('/api/...).
Note : Ne pas mettre d'adresse complète (localhost:5000), laisser le Proxy diriger.

🛡️ 4. La Gateway (Le Proxy Nginx)
C'est le point d'entrée unique. Rien ne passe sans lui.
Fichier default.conf :
Port 80 -> redirige vers frontend.
Chemin /api -> redirige vers backend.

📦 5. Docker Compose (L'Infrastructure)
C'est le fichier qui lie tout. Il définit les réseaux privés entre les conteneurs.
Commande de lancement : docker-compose up --build -d
Avantage : L'application est identique sur ton PC et sur le serveur.

🚀 6. Déploiement & Système
Une fois le code sur GitHub, voici les étapes pour le "Vrai Internet" :

Étape             Commande / Outil             Action
1. Connexion      ssh root@IP_SERVEUR          Entrer dans le serveur distant.
2. Setup          apt install docker.io        Installer les outils (une fois).
3. Pull           git pull origin main         Récupérer la dernière version du code.
4. Start          docker-compose up -d         Lancer l'app en arrière-plan.
5. SSL            Certbot                      Ajouter le HTTPS (cadenas).

🛠️ Commandes de survie (Cheat Sheet)
docker ps : Voir si mes conteneurs sont vivants.
docker-compose logs -f : Voir les erreurs en temps réel.
docker-compose stop : Éteindre l'application.
git add . && git commit -m "update" && git push : Sauvegarder et envoyer.