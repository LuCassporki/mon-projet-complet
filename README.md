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




1. Côté Design (HTML/CSS)
Tu peux transformer ton bouton tout moche en une interface magnifique.
Utilise un framework comme Tailwind CSS ou simplement du CSS propre.
Ton fichier frontend/index.html est ton bac à sable.

2. Côté Fonctionnalités (JS/Back)
C'est là que ça devient puissant. Tu peux créer de nouvelles routes.
Exemple : Créer une page de "Livre d'or".
Front : Tu ajoutes un <input> pour que l'utilisateur tape son nom.
Back : Tu crées une route app.post('/api/message') pour enregistrer ce nom en base de données.

3. Côté Système (Docker)
Tu n'y toucheras presque plus. La seule raison d'y revenir serait d'ajouter un nouvel outil (par exemple, un service pour envoyer des emails ou un autre pour stocker des images).


💡 Un petit rappel pour la suite :
À chaque fois que tu ajoutes une bibliothèque Node.js (comme bcrypt pour les mots de passe ou dotenv), n'oublie pas :
1-Fais le npm install dans le dossier backend.
2-Relance un docker-compose up --build pour que Docker mette à jour sa "boîte" avec le nouvel outil.

Ton mémo est maintenant ton meilleur ami.
Si un jour tu veux créer un deuxième projet, tu n'auras qu'à copier-coller tes fichiers docker-compose.yml et gateway/default.conf. Tu gagneras des heures de travail !



-Ouvre MongoDB Compass et connecte-toi avec cette adresse : 
--mongodb://localhost:27017 
Tu verras alors ta base "mon_app" et ta collection "visites" avec tout ce qui a été enregistré !

-méthode "Commando" (Dans le terminal)
--docker ps
-Entre à l'intérieur du conteneur (remplace nom_du_conteneur par celui trouvé, souvent c'est mon-projet-database-1) :
docker exec -it nom_du_conteneur mongosh
-Une fois dans le "shell" MongoDB (le curseur change), tu peux taper des commandes :
--show dbs (pour voir les bases).
--use mon_app (pour entrer dans la tienne).
--db.visites.find() (pour voir toutes les données enregistrées).



**********commandes******************
📦 Docker & OrchestrationC'est ce qui gère tes "boîtes" (conteneurs) et l'infrastructure.
Commande,                     Description
docker-compose up --build      ,La plus importante. Construit les images et lance tous les services.
docker-compose up -d           ,"Lance les services en arrière-plan (détaché), pour libérer ton terminal."
docker-compose down            ,Arrête et supprime tous les conteneurs du projet.
docker-compose logs -f         ,Affiche les erreurs et messages de tous les services en temps réel.
docker-compose ps              ,Liste tes services et montre s'ils sont Up (en vie) ou Exit (crashés).
docker system prune -a         Si un jour rien ne marche et Docker "bugue", tout nettoyer (attention, ça vide le cache)


🛠️ Node.js & Modules (npm)
À utiliser à l'intérieur du dossier backend/ pour gérer les outils de ton serveur.
Commande,              Description
npm init -y            ,Crée le fichier package.json (la carte d'identité du projet).
npm install express    ,Installe le framework pour créer l'API (les routes).
npm install mongoose   ,Installe l'outil pour parler à la base de données MongoDB.
npm install cors       ,Installe la sécurité pour autoriser ton Front à parler au Back.


🛡️ Système & Sécurité (Windows/PowerShell)
Les commandes pour débloquer ton ordinateur et naviguer.
Commande,                             Description
Set-ExecutionPolicy RemoteSigned     ,Autorise Windows à lancer des scripts (comme npm).
cd nom_du_dossier                    ,Change Directory : pour entrer dans un dossier (ex: cd backend).
cd ..                                ,Remonte d'un niveau dans les dossiers (pour revenir à la racine).
ls (ou dir)                          ,Liste tous les fichiers présents dans le dossier actuel.


🚀 Git & Déploiement
Pour sauvegarder ton travail et l'envoyer sur ton serveur distant.
Commande,                            Description
git add .                           ,Prépare tous tes changements pour la sauvegarde.
"git commit -m ""message"""         ,Crée un point de sauvegarde avec un petit texte explicatif.
git push origin main                ,Envoie tes sauvegardes sur GitHub.
ssh user@ip                         ,Te connecte à distance sur ton serveur de production.




*************** memo V2 *******************
# 🚀 Mon Projet Fullstack (Livre d'Or)

Ce projet est une application web complète utilisant une architecture moderne micro-services conteneurisée avec Docker.

## 🏗️ L'Architecture
- **Frontend** : HTML5 / JavaScript (Interface utilisateur)
- **Backend** : Node.js & Express (API REST)
- **Database** : MongoDB (Stockage des messages)
- **Admin DB** : Mongo Express (Interface de gestion de la base)
- **Gateway** : Nginx (Reverse Proxy & Serveur de fichiers statiques)

---

## 🛠️ Installation et Lancement

### 1. Pré-requis
- Avoir [Docker](https://www.docker.com/) installé.
- (Windows uniquement) Avoir autorisé les scripts dans PowerShell :
  `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

### 2. Lancer l'application
À la racine du projet, exécute la commande suivante :
```bash
docker-compose up --build


L'application sera disponible sur :
Site Web : http://localhost

Gestion Base de données :
http://localhost:8081


📑 Aide-mémoire des Commandes (Cheat Sheet)
🐳 Docker Compose
Commande,Action
docker-compose up --build              ,Reconstruit et lance tout le projet
docker-compose down                    ,Arrête et supprime tous les services
docker-compose logs -f                 ,Affiche les erreurs en temps réel
docker-compose ps                      ,Vérifie l'état des services (Up ou Exit)


🟢 Backend (Node.js)
À exécuter dans le dossier /backend :
npm install : Installe les dépendances (Express, Mongoose, Cors)
npm install <nom-du-paquet> : Ajoute un nouvel outil au serveur



💾 Base de données
Service : MongoDB (port 27017)
URL de connexion : 
mongodb://database:27017/mon_app



🚀 Déploiement (Production)
Pousser le code sur GitHub : 
git push origin main

Se connecter au serveur : 
ssh user@votre-ip

Récupérer le code : 
git pull

Lancer en arrière-plan : 
docker-compose up -d

---

### 💡 Le petit plus


Avec ce fichier, ton projet est "pro". Tu as maintenant :
1.  **Le code** (tes fichiers JS/HTML/YAML).
2.  **L'infrastructure** (tes Dockerfiles).
3.  **La documentation** (ton README).

C'est exactement ce qu'on attend d'un développeur aujourd'hui. 