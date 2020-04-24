# **Expliquez à quoi sert le format `topojson` et en quoi il diffère du format `geojson`**

TopoJSON est une extension de GeoJSON. TopoJSON introduit un nouveau type, "Topologie", qui contient des objets GeoJSON. Une topologie a une carte d'objets qui indexe les objets géométriques par leur nom. Il s'agit d'objets GeoJSON standard, tels que des polygones, des polygones multiples et des collections de géométries. Cependant, les coordonnées de ces géométries sont stockées dans le tableau d'arcs de la topologie, plutôt que sur chaque objet séparément. Un arc est une séquence de points, semblable à une chaîne de lignes; les arcs sont assemblés pour former la géométrie. 

(https://github.com/topojson/topojson/wiki/Introduction)

Il prends beaucoup moins de place que GeoJSON, pour la même quantité d'information.TopoJSON élimine la redondance, permettant aux géométries associées d'être stockées efficacement dans le même fichier.