ionnées pris depuis:
https://opendata.swiss/fr/dataset/nachnamen-pro-plz

Commande pour le telechargement et sauvegarde du fichier json:

```
curl https://swisspost.opendatasoft.com/api/v2/catalog/datasets/nachnamen_proplz/exports/json > noms.json
```

Creation d'un fichier prepareData.js que a l'execution est sensé de trier les données de noms.data.


Pour lancer l'execution il faut faire ce code dans le terminale dans le fichier 20200228:
```
node prepareData.js > data.json
```

et avec ce commande est possible mettre les données trié (finales) tous dans data.json sous forme de tableau bidimensionel.

Creation d'un dossier src avec dedans un fichier index.js et index.html pour l'affichage.

D'abord, il faut s'assurer que dans le fichier package.json, dans le script est indiqué le chemin correct pour arriver au fichier index.html

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "batons:dev": "parcel 20200228/src/index.html --out-dir 20200228/dist"
  },
```

Pour lancer le server suffit de taper dans le trminale la ligne suivante:

```
npm run batons:dev
```



















