// 1. Sélectionner ou créer la base de données
use marketplaceDB;

// 2. Créer la collection "articles"
db.createCollection("articles");

// 3. Insérer des documents dans la collection "articles"

// Document 1 : iPhone
db.articles.insertOne({
  titre: "Apple iPhone 14 Pro Max",
  description: "iPhone 14 Pro Max, 256GB, état neuf, avec accessoires d'origine.",
  prix: 1200,
  categorie: "Electronique",
  vendeur: {
    id: "user1234",
    nom: "Diego Delavega",
    note: 4.8
  },
  details: {
    etat: "Neuf",
    couleur: "Noir",
    capacite: "256GB",
    fabricant: "Apple"
  },
  livraison: {
    type: "Standard",
    prix: 10,
    options: ["Suivi", "Assurance"]
  },
  localisation: {
    pays: "France",
    ville: "Paris",
    codePostal: "75001"
  },
  dateMiseEnLigne: new Date("2023-10-20T14:48:00Z"),
  tags: ["iPhone", "smartphone", "Apple", "electronique"],
  nombreVues: 120
});

// Document 2 : Chaise de bureau
db.articles.insertOne({
  titre: "Chaise de bureau ergonomique",
  description: "Chaise de bureau ergonomique avec accoudoirs et dossier réglable, en très bon état.",
  prix: 150,
  categorie: "Mobilier",
  vendeur: {
    id: "user5678",
    nom: "Elodie Durand",
    note: 4.6
  },
  details: {
    etat: "Très bon état",
    couleur: "Gris",
    materiau: "Tissu et métal"
  },
  livraison: {
    type: "Express",
    prix: 20,
    options: ["Suivi"]
  },
  localisation: {
    pays: "France",
    ville: "Lyon",
    codePostal: "69002"
  },
  dateMiseEnLigne: new Date("2023-09-10T10:20:00Z"),
  tags: ["chaise", "bureau", "ergonomique", "mobilier"],
  nombreVues: 85
});

// Document 3 : Montre Rolex
db.articles.insertOne({
  titre: "Montre Rolex Submariner",
  description: "Montre Rolex Submariner, modèle 2021, étanche jusqu'à 300 mètres.",
  prix: 9000,
  categorie: "Luxe",
  vendeur: {
    id: "user91011",
    nom: "Pierre Durand",
    note: 5.0
  },
  details: {
    etat: "Comme neuf",
    couleur: "Argent",
    materiau: "Acier inoxydable",
    marque: "Rolex"
  },
  livraison: {
    type: "Premium",
    prix: 50,
    options: ["Suivi", "Assurance", "Signature requise"]
  },
  localisation: {
    pays: "France",
    ville: "Nice",
    codePostal: "06000"
  },
  dateMiseEnLigne: new Date("2023-08-15T16:30:00Z"),
  tags: ["montre", "Rolex", "luxe", "accessoire"],
  nombreVues: 210
});
