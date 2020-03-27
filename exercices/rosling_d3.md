# Créer le graphique avec d3

1. **Comment et pourquoi le code est t-il divisé en plusieurs fichier?**

   Le code est divisé dans les fichier suivant:

   - **index.html**

     Il est l'endroit où sera dessiner le graphique avec <div id="graph">.

     Ce fichier définira l'année qui va être visualisée

   - **index.css** 

     Il defini le style a les balises du fichier html, donc aussi au notre graphique 

   - **index.js**

     Il contien le code pour le script que nous avons créer à l'étape précédente. Mais pour le faire marcher il faut importer les donnnées de data.json et importer des éléments de éléments.js et sales.js

     Dans ce fichier seront crée les éléments (bulles) a afficher.

   - **config.js**
     Il définit les dimension du graphique (hauteur, largeur, marges)

   - **scales.js**

     Il faut definir les échelles pour l'axes des x et y, et pour le rayon des bulles (population).  Les echélles sont importées de `d3` et la largeur et hauteur sont importés de [`config.js`](https://github.com/idris-maps/heig-datavis-2020/blob/master/modules/rosling/graphique_d3/src/config.js) créé just avant.

     La mise a jour des données sera fait ici.

   - **elements.js**

     Il va ajouter des légendes (années, axes, nom des pays au dessus des bulles) pour ne pas surcharger index.js

     Il fais l'affichage de l'année, des axes et des noms des pays quand la souris passe sur une bulle (mouseover). 

2. **Comment le nom du pays est t-il afficher quand la souris passe sur une bulle?**

Il y a trois facons pour afficher le nom du pays quand la souris passe sur une bulle (mouseover):

1. Quand la souris est plus sur une bulle le texte reste affiché
2. Quand nous bougeons la souris à l'intérieur d'une bulle, le texte suit
3. Il est possible de distinguer de quelle bulle on parle quand il y en a plusieurs au même endroit avec l'integration d'un contour noir autour de la bulle sur laquelle on est.

