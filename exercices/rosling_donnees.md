# Préparer les données

1. **Expliquez la procédure en quelques points**

   - Télécharger les données a l'aide du command curl

   - Convertir les xlsx en csv

     1. Installer une librairie xlsx

     2. Créer un scripte

     3. Passer le nom du fichier et la "feuille" au scripte de la fonction avec le commande:

        `node xlsxToCsv NOM_DU_FICHIER NOM_DE_LA_FEUILLE > FICHIER_CSV`

     4. A repeter pour tous les fichiers

   - Joindre les données entre elles en faisant une conversion csv en json

     --> Trois scriptes différents pour les trois differents feuiles, à faire selon les données que on veux

   - Joindre les jeux de données avec l'utilisation d'un donné comune a les trois feuilles (l'identifiant geo)

   - Définir une clé avec les corchet carré []

   - Créer un script bash pour avoir une seule commande qui lancera toutes les commandes que nous avons utilisées, les une après les autres.

2. **Quel est l'interet d'avoir des scriptes pour manipuler des données?**

   "Le problème avec toutes les manipulations manuelles est qu'on ne se souvient pas toujours de ce qu'on a fait. Et même si nous avons pris note de la procédure, nous devons répéter ces gestes à chaque fois que nous souhaitons mettre à jour les données."

   Donc avec les script est possible creer des "fonction" qui faisent pour nous des opérations en automatique si on leurs passe des données.

3. **Comment avons nous joint les quatre jeux de données?**

   Dans tous les fichiers des données il y avait toujours la colonne "geo". Donc a étais possible lier les 4 avec ca.