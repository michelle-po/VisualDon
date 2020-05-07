# Projet de fin de cours

**Majka Voide, Audrey Zeugin & Michelle Ponti**  

VisualDon | M47 | Comem+ | Heig-vd | 2020

------

Pour le projet de fin de cours, on a choisi d'examiner les trois plus diffusés mauvaises habitudes du monde: l'alcohol, le tabac et les drogues. En tant que jeunes, des fois on regarde pas ces thématiques avec le juste poids. Avec nos graphiques on aimerait donc montrer à les gens de notre génération les terribles effets de ces 3 mauvaises habitudes et faire leurs changer d'avis.

## ***D'où viennent les données (où, qui, pourquoi...)***

Les données viennent de [ourworldindata.org](), un site spécialisé en données démographiques. Plus spécifiquement:

- Pour les données relatives a les drogues:
  [https://ourworldindata.org/grapher/death-rates-from-drug-use-disorders](https://ourworldindata.org/grapher/death-rates-from-drug-use-disorders)

- Pour les données relatives a le tabac:
  https://ourworldindata.org/grapher/death-rate-smoking?tab=map

- Pour les données relatives a l'alcool:
  https://ourworldindata.org/grapher/death-rate-smoking?tab=maphttps://ourworldindata.org/grapher/death-rates-from-alcohol-use-disorders

Les trois jeux des données sont dans le même format: pour chaque pays il y a le taux de mortalité de la cause sur 100'000 habitants depuis le 1990 jusqu'a le 2017. 

**Notre idée:**
Avec ces données on aimerais construire des maps du monde interactifs avec la bibliotèque Javascript pour la cartographie **Leaflet**. On montrera plus precisement pour chaque pays le taux de mortalité sur 100'000 personnes par les differentes causes en 2017. Seront donc 3 graphiques et un de plus qui somme les taux des 3 causes pour voir les pays avec les plus hauts totales.

En suite, on a ajouté un graphique dynamique **avec d3** qui s'appel "bart chart race". Avec ce la est possible voir la progression des taux totales (somme de tous le pays) des 3 causes a partire du 1990 jusqu'a le 2017. 

Pour terminer on a ajouté un graphique crée avec la librerie **billboard.js** qui montre enseble les 3 taux de mortalité pour chaque années. 

## ***Comment elles ont été transformées***

Les données ont été téléchargés depuis le site en format .csv, ouvert en excel pour les analyser. Pour reussir a créer les maps du monde avec leaflet on avais besoin de données sous forme GeoJson, integrent donc aussi les coordonnées des pays en plus que la valeur des taux. On a donc pris la base avec les coordonnées des pays du monde depuis https://github.com/johan/world.geo.json/blob/master/countries.geo.json et on a ajouté manuelment les valeur des taux.

Pour les autres graphiques on a du créer des tables pivot sur excel pour regrouper les données que nous avons eu besoin pour créer finalement des csv et des json avec des scripts de préparation pour les utiliser.

## ***Un lien vers le code source de votre visualisation***

https://github.com/AudilaraZ/VisualDon/tree/master/mon-projet

## ***Un lien vers votre visualisation publiée***

http://audreyzeugin.surge.sh

## ***Quel scripte je dois utiliser pour recréer le site à partir de votre code***

