Données depuis:
https://opendata.swiss/fr/dataset/nachnamen-pro-plz

Commande pour le telechargement et sauvegarde du fichier json:

```
curl https://swisspost.opendatasoft.com/api/v2/catalog/datasets/nachnamen_proplz/exports/json > noms.json
```

Creation d'un fichier prepareData.js que a l'execution est sensé de trier les données de noms.data.


pour lancer l'execution il faut faire ce code dans le terminale dans le fichier 20200228:
```
node preapreData.js > data.son
```

et avec ce commande est possible mettre les données trié (finales) tous dans data.json sous forme de tableau bidimensionel.









