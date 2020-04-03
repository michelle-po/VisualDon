# Données cartographiques

1. **Qu'est qu'une projection et pourquoi devons nous projeter des données cartographiques?**

   Sont des différentes manières de "projeter" une sphère sur une surface plane. Un exemple de projection est rappresenter notre planèete Terre sur un feuille.

2. **Dans le contexte des données cartographiques, qu'est-ce qu'une géométrie?**

   Une collection GeoJSON (a une clé *type* avec la valeur FeatureCollection et une clé *features* qui est un tableau d'objets JSON.

   Chacun de ces "features" a une clé *type* avec une valeur Feature, une clé *properties* et une clé *geometry*.

   La clé ***geometry*** définit la form géométrique. Geometry peut représenter différents types de géométries, comme des ponts, une ligne, un polygone, des multi-points, des multi-lignes, des muli-polygones.

   

3. **Citez trois différents formats de données cartographiques**

1. Le format GeoJSON (de l'anglais Geographic JSON, signifiant littéralement JSON géographique) permet l'encodage dedonnées géospatiales en utilisant la norme JSON.
2. Le format Shapefile n'est pas utlisable directement avec javascrip. Il faut convertire les données au format shapefile en GeoJSON.
3. Le format Open street map. Les données sont facilement téléchargable depuis les serveurs de open street map.