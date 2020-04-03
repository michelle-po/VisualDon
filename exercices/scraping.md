# Scraping 

**Décrivez avec vos propres mots comment j'ai procédé pour télécharger ces deux jeux de données**

**Dans le cas des chaussettes sur Galaxus:**

- aller dans la page des chaussettes dans le navigateur

- ouvrire la console developpeur du navigateur sous l'onglet "network" et chercher le fichier avec les données (un json normalement assez lourd)

- Une fois la requête trouvée (il s'agit deun requete GraphSQL) il faut faire un click droit dessus et `Copy > Copy as cURL` et il sera crée un comand cURL pour pouvoir acceder a les données

- pour téléchrger cette donnée sa sufit de copie coller le command curl dans le terminal et ajotuer a la fin de la requete ou on veut stocker cette info, par exemple un fichier json:

  ```
  curl 'https://www.galaxus.ch/api/graphql' -H 'User-Agent:  ..............
  > chaussettes.json
  ```

 **les titres des sujets du journal de 19h30 de la RTS**

- aller dans la page du journal du jour de la rts

- ouvrire la console developpeur du navigateur sous l'onglet "network" et chercher une requete URL qui ressemble a la suivant (methode GET) :

  https://www.rts.ch/play/tv/show/6454706/latestEpisodes?maxDate=ALL

- si on ouvre la requete cette requete dans le navigateur on voix qu'elle retourne les 10 derniers épisodes du "19h30", et chaque épisode contient une série de `segments`, les sujets du jour. 
  (Si on change "ALL" a la fin de la requete avec une date, nous pouvons obtenir les 10 épisodes précédents cette date.)

- Pour pouvoir manipuler les dates qui on aura dans les données, il faut executer la commande suivante pour instalelr dajs (une librerie):

  ```
  npm install dayjs --save
  ```

- En suite il a été crée une fonction pour trouver la prochaine date (10 jours avant la précédente):

  ```
  const getNextMaxDate = maxDate =>
    (maxDate === 'ALL' ? dayjs() : dayjs(maxDate, 'YYYY-MM-DD'))
      .subtract(10, 'day')
      .format('YYYY-MM-DD')
  ```

- Pour télécharger les données, il faut utiliser le commande `node-fetch`, mais avant on doit installer le module:

  ```
  npm install node-fetch --save
  ```

- après, on fait une fonction qui prends `maxDate`qui execute la requête et lis la réponse au format `json` grace aussi a la commande fecth:

  ```
  const getLatestEpisodes = maxDate =>
    fetch(`https://www.rts.ch/play/tv/show/6454706/latestEpisodes?maxDate=${maxDate}`)
      .then(r => r.json())
  ```

- Finalement, pour sauvegarder les données obtenus, il faut sauver les données dans un fichier [`ndjson`](http://ndjson.org/), (new line delimited json), c'est à dire un fichier où chaque ligne représente un objet `json`. (À chaque fois que on reçoive des données du serveur de la RTS, il faut une ligne à ce fichier.)

  Pour ajouter les lignes au fichier, il faut avoir la librerie fs (deja installée avec code) et utiliser ca fonction [`createWriteStream`](https://nodejs.org/en/knowledge/advanced/streams/how-to-use-fs-create-write-stream/):

  ```
  const file = fs.createWriteStream('scraped.ndjson')
  
  const saveLatest = latest =>
    file.write(`${JSON.stringify(latest)}\n`)
  ```

  --> `file` est le fichier où seront sauvegardé les données (Il s'appellera donc`scraped.ndjson`). 
  --> La fonction `saveLatest` prends un objet json (`latest`) et le converti en chaîne de caractères (`JSON.stringify`) et reviens à la ligne `\n`.

- Vu que on veux les episodes de plusieurs date on fait une boucle pour pour télécharger les données pour une certaine date et pour sauver le résultat. 
  (on la dévéloppe pour avoir les titres du passé jusqu'a l'année 2000)

- on lance la boucle avec:

  ```
  loop('ALL', err => console.log(err || 'done'))
  ```

  Le script entier est [`scriptes/scrape.js`](https://github.com/idris-maps/heig-datavis-2020/blob/master/modules/19h30/scriptes/scrape.js), il faut  le lancer avec:

  ```
  node scriptes/scrape.js
  ```

  Maintenant on a presque 20 ans de titres du 19h30 dans `scraped.ndjson`

  Le script entier est [`scriptes/scrape.js`](https://github.com/idris-maps/heig-datavis-2020/blob/master/modules/19h30/scriptes/scrape.js), il faut  le lancer avec:

  ```
  node scriptes/scrape.js
  ```

  Maintenant on a presque 20 ans de titres du 19h30 dans `scraped.ndjson` où chaque ligne est un `json` contenant dix épisodes. Main on veut modifier tout ça en splitant le tout et en faisant en sorte que une ligne corresponde à un seul épisode. 

- Pour lire le fichier ligne par ligne on va utiliser la librairie readline (qui vien aussi de node) et utiliser la fonction reader.on

- Il faut trier les informations en gardant seulement les parties qui sont intéressant et dans les bons fomats et on les sauvegarde dans des fichiers séparé.

- Quand on a tous les épisodes on peux lier ce que l'on veut grâce à l'id des épisodes pour former un fichier final qu'on nommera segments.ndjson:

  ```
  node scriptes/extractSegments < episodes.ndjson > segments.ndjson
  ```

