# Faites une recherche sur les données du 19h30

**Écrivez un scripte pour faire la recherche de votre choix sur ces données. Si vous n'êtes pas inspirés, donnez-moi les premiers titres des épisodes les plus vus (il y a une clé `views` dans [`episodes.ndjson`](https://github.com/idris-maps/heig-datavis-2020/blob/master/modules/19h30/episodes.ndjson).**

 clôner le repo:

```
git clone git@github.com:idris-maps/heig-datavis-2020.git
```

installer les librairies définies dans `node_modules`

```
npm install
```

et [installer les librairies "globalement"](https://github.com/idris-maps/heig-datavis-2020/blob/master/modules/19h30/donnees.md#point_up-installer-une-librairie-globalement) dont vous avez besoin.

```
sudo npm install ndjson-cli -g
sudo npm install vega-lite -g
```

Allez dans le dossier `modules/19h30` pour faire tourner le scripte

```
cd modules/19h30
```

**si pour prendre les épisodes les plus longs c'etais ca:**

```
ndjson-sort "a.duration > b.duration ? -1 : 1" < episodes.ndjson \
| head -10 \
| ndjson-map "{ firstTitle: d.segments[0].title, date: d.date, duration: Math.round(d.duration / 60) }" \
| ndjson-reduce
```

- `ndjson-sort 'a.duration > b.duration ? -1 : 1' < episodes.ndjson` ordonne les épisodes par durée
- `head -10` ceci est un scripte qui vient avec la console, il prends les 10 premières lignes
- `ndjson-map '{ firstTitle: d.segments[0].title, date: d.date, duration: Math.round(d.duration / 60) }'`pour chaque ligne nous prenons le titre du premier sujet, la date et la durée en minutes (elle est en secondes)
- `ndjson-reduce` sans arguments, crée un tableau `json` avec les lignes qui lui sont passées)

**Alors pour les episodes plus vu est:**

```
ndjson-sort "a.views > b.views ? -1 : 1" < episodes.ndjson \
| head -10 \
| ndjson-map "{ firstTitle: d.segments[0].title, date: d.date, vues: d.views}" \
| ndjson-reduce
```

Le résultat est:

[{"firstTitle":"Succession de Hans-Rudolf Merz: entretien avec Johann Schneider-Ammann, candidat PLR","date":"2010-09-03","vues":273846},{"firstTitle":"Attentat à Charlie Hebdo: la traque des suspects se poursuit au nord-est de Paris (1/2)","date":"2015-01-08","vues":212862},{"firstTitle":"Double attentat en Norvège: Andres Breivik prévoyait d'autres attaques","date":"2011-07-30","vues":158392},{"firstTitle":"Un Suisse sur dix est obèse et quatre Suisses sur dix ont des kilos en trop","date":"2013-10-10","vues":109196},{"firstTitle":"Le conseil fédéral annonce qu'il interdit les rassemblements de plus de 5 personnes","date":"2020-03-20","vues":106009},{"firstTitle":"Le conseil fédéral annonce qu'il interdit les rassemblements de plus de 5 personnes","date":"2020-03-20","vues":106008},{"firstTitle":"Coronavirus: l'OFSP lance une campagne de prévention.","date":"2020-02-27","vues":95983},{"firstTitle":"Selon les autorités fédérales, il est temps de réagir fortement pour éviter une surcharge des hôpitaux.","date":"2020-03-17","vues":94302},{"firstTitle":"Le Conseil fédéral ferme toutes les écoles et interdit les rassemblements de plus de 100 personnes.","date":"2020-03-13","vues":92939},{"firstTitle":"Le trafic aérien est interrompu entre l'Europe et les États-Unis.","date":"2020-03-12","vues":90513}]

**--> donc ca marche!**