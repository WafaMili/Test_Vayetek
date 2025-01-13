function calculerSommedétalonnage(lignes) {
  let somme = 0;

  lignes.forEach(ligne => {
      let chiffres = [];
      
      for (let i = 0; i < ligne.length; i++) {
          const char = ligne[i];
          if (char >= '0' && char <= '9') {
              chiffres.push(char);
          }
      }
      if (chiffres.length >= 2) {
          const premier = chiffres[0];
          const dernier = chiffres[chiffres.length - 1];
          const valeur = parseInt(premier + dernier, 10);
          somme += valeur;
      }
  });

  return somme;
}

const fs = require('fs');
fs.readFile('Document.txt', 'utf8', (err, data) => {
  if (err) {
      console.error("Erreur lors de la lecture du fichier :", err);
      return;
  }
  const lignes = data.split('\n');
  const sommeTotale = calculerSommedétalonnage(lignes);
  console.log("La somme totale des valeurs d'étalonnage est :", sommeTotale);
});
