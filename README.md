# TP1 MongoDB

## Importation d'un fichier json

Importer depuis un fichier

```bash
# /bin/bash
mongoimport --db Bibliotheque --collection Livres --file livres.json --jsonArray
```

Consulter la base de données

```bash
# mongosh
use Bibliotheque
db.Livres.find().limit(5).pretty()
```

## Exportation d'une collection (JSON)

Exporter une collection

```bash
# /bin/bash
mongoexport --db Bibliotheque --collection Livres --out ./export/livres_export.json --jsonArray
```

## Exportation d'une collection (CSV)

Exporter une collection

```bash
# /bin/bash
mongoexport --db Bibliotheque --collection Livres --type=csv --fields titre,auteur.nom,prix --out ./export/livres_export.csv
```

## Exportation avec une query

- Exporter une collection avec des livres de plus de 300 pages

```bash
# /bin/bash
mongoexport --db Bibliotheque --collection Livres --out ./export/livres_plus_300pages.json --jsonArray --query='{"pages":{"$gt":300}}'
```

## Requêtes

- Afficher les articles de la catégorie **Electronique**

```bash
# mongosh
db.articles.find({categorie:"Electronique"})
```

- Afficher les articles de la catégorie **Electronique** et certaines informations

```bash
# mongosh
db.articles.find({"categorie":"Electronique"}, {"titre":1,"prix":1,"vendeur.nom":1,"_id":0})
```

- Afficher les articles de la catégorie **Electronique** de plus de 500€

```bash
# mongosh
db.articles.find({"categorie":"Electronique","prix":{"$gt":500}},{"titre":1,"description":1,"prix":1})
```

- Afficher les articles de la catgorie **Electronique** de plus de 500€

```bash
# mongosh
db.articles.find({"prix": {"$gt":500}, "categorie": "Electronique"}, {"titre":1,"prix":1,"vendeur.nom":1,"_id":0})
```

- Afficher les articles de la catégorie **Electronique** ou ceux de plus de 500€

```bash
# mongosh
db.articles.find({"$or":[{"categorie":"Electronique"},{"prix":{"$gt":500}}]})
```

- Mettre à jour le prix de l'article _Montre Rolex Submariner_ à 9500€

```bash
# mongosh
db.articles.findOneAndUpdate({"titre":"Montre Rolex Submariner"}, {"$set":{"prix":9500}})
```
