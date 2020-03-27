#  Différences entre d3.select et react

1. **Comment les bulles sont-elles créées dans cette version?**

   Au tout début il faut installer la librerie" react", changer l'extension du fichier `index.js` en `index.jsx`, et importer la nouvelle librerie et la fonction `render` de `react-dom` dans cet index.

   Après pour créer les bulles il faut:

   - Créer un composant qui génère une bulle (par exemple const Bubble):

     ```
     const Bubble = ({ data, yearIndex }) =>
       <circle
         cx={ xScale(data.gdp[yearIndex]) }
         cy={ yScale(data.lex[yearIndex]) }
         r={ rScale(data.pop[yearIndex]) }
         fill={ getColorByRegion(data) }
         stroke={ getColorByRegion(data) }
         fillOpacity="0.4"
         />
     ```

   - Il y a deja un composant qui prends un objet avec deux clés `data` et `yearIndex`  (comme avec d3)

   - Avec JSX il faut faire des attributs dynamiques en entourant le résultat avec les accolades {}:

     ```
     const Bubbles = ({ year }) =>
       data.map(d => <Bubble key={d.geo} data={d} yearIndex={ year - 1800 }/>)
     ```

   -  Les bubbles crées seront stocké dans un tableau a l'aide de .map(), qui  permettra de retourner aprèschaque bulle single avec ses attributs data et yearIndex.

2. **Comment les données sont elles jointes aux éléments DOM avec `react`?***

   Il est recommandé de liées les données au DOM avec des clés uniques pour des raisons de performance. Avec key il faut prendre un identifiant unique, donc dans ce cas on prend l'identifiant des  pays "geo". Si on ne le fait pas on risque d'avoir des erreures dans la console.

   

