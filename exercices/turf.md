# **Expliquez ce que font chacune des 4 fonctions `turf` utilisées dans l'exemple avec les bars autour de la HEIG.**



1. **circle()**

   Ce la prends en parametre:

   - Les coordonnées autour desquelles nous souhaitons dessiner le cercle
   - Le rayon
   - La configuration où nous decrivons l'unité pour le rayon

   Et elle retourne:

   - un objet geojson de type `Polygon`.

2. **bbox**()

   Ce la prends en parametre:

   - un objet geojson

   Et elle retourne:

   - une "bounding box": Un "bounding box" (ou `bbox`) représente les longitudes et latitudes minimales et maximales d'une zone géographique. Elle est représentée par un tableau avec longitude minimum, latitude minimum, la longitude maximum et la latitude minimum

3. **bboxPolygon()**

   Ce la prends en parametre:

   - Un bbox

   Et elle retourne:

   - un polygone GeoJSON

4. **distance()**

   Ce la prends en parametre:

   - le point de départ, 
   - le point d'arrivée, 
   - une configuration où nous définissons l'unité de mesure

   Et elle retourne:

   - un nombre

