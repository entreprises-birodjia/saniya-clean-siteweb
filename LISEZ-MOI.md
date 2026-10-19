# SANÍYA CLEAN — Maquette visuelle et sources

## Ouvrir la maquette
1. Extraire entièrement l’archive ZIP dans un dossier.
2. Ouvrir index.html par double-clic dans un navigateur récent.
3. Garder style.css, script.js et le dossier images à côté de index.html.
Aucun serveur, installation, compte ou accès Internet n’est requis.

Le fichier autonome livré séparément contient la même maquette, avec les images,
le CSS et le JavaScript intégrés. Il s’ouvre seul, sans extraire l’archive.
Pour modifier et faire évoluer le projet, privilégier les sources séparées.

## Organisation
index.html : structure sémantique, textes, formulaires et emplacements juridiques.
style.css : palette, composants, responsive, focus et réduction des animations.
script.js : menu mobile, présélection de service, message de démonstration,
            ouverture des emplacements juridiques. Aucune requête réseau.
images/*.webp : visuels optimisés utilisés réellement par la page.
images/originaux/*.jpg : les cinq images fournies, conservées sans modification.
verification.json : résultats des contrôles navigateur de cette livraison.

## Identité et visuels
Palette : bleu foncé #082b48, bleu #006da6, bleu clair #19b5dd,
vert #4d8c24, blanc #ffffff. Les teintes ne constituent pas un relevé officiel
Pantone : elles peuvent être ajustées si une charte de marque est fournie.
Signature textuelle officielle : PROPRETÉ • CONFIANCE • EXCELLENCE.
Les deux logos fournis sont utilisés comme images, sans redessin.
Le logo typographique WebP est recadré pour retirer ses grandes marges blanches.
Les slogans déjà intégrés aux fichiers originaux sont conservés dans les visuels.
Les photographies conservent leurs proportions ; leur cadrage d’affichage est
réalisé avec object-fit: cover. La mascotte apparaît dans le bandeau de proximité.

## Fonctionnement de démonstration
Navigation par ancres ; menu mobile ouvrable et refermable ; touche Échap ;
présélection du service depuis les cartes ; validation locale des champs ;
message explicite de non-envoi au clic sur les boutons des formulaires.
Sans JavaScript, les liens restent utilisables et les formulaires ne sont pas envoyés.
Les contenus saisis ne sont ni enregistrés par le site ni transmis.
Ne pas saisir de données personnelles réelles dans cette démonstration.
Aucun calcul de prix ou devis contractuel. Aucun service technique complet.
Aucune base de données, réservation, paiement, administration, connexion,
facturation, automatisation, suivi statistique ou envoi d’e-mail.
Aucun cookie applicatif ou stockage navigateur n’est ajouté par le code.

## Ressources externes
Aucune bibliothèque, police distante, CDN, API, outil analytique ou ressource payante.
Polices système : Segoe UI, Arial, sans-serif ; Georgia pour les guillemets.
Icônes d’interface SVG intégrées directement au HTML (pas des logos de substitution).
Images : exclusivement les cinq visuels fournis pour ce projet.
Le navigateur Chromium / Playwright utilisé pour les captures est un outil de
vérification, pas une dépendance du site livré.

## Vérifications réalisées
Contrôle dans Chromium sans serveur, depuis les fichiers locaux.
Largeurs contrôlées : 320, 390, 820 et 1440 pixels ; aucun débordement horizontal
observé à ces tailles. Ce contrôle n’est pas une certification tous navigateurs.
Images chargées, ancres résolues, menu mobile, présélection et deux formulaires testés.
Pas d’erreur JavaScript observée. Version autonome testée : images intégrées
chargées et aucune requête HTTP/HTTPS observée.
Les captures PNG livrées sont de véritables rendus navigateur de la maquette.

## À compléter avant une publication réelle
- Coordonnées officielles : téléphone, e-mail, adresse.
- Identité juridique, SIRET, éventuelle TVA, responsable de publication, hébergeur.
- Mentions légales et politique de confidentialité adaptées au futur site.
- Validation des témoignages reformulés et autorisation des personnes concernées.
- Vérification des droits d’utilisation des images et des logos fournis.
- Validation de la zone desservie, du périmètre des services et des modalités.
- Relecture de tous les textes et validation finale du design.
- Supprimer ou adapter les mentions de démonstration et noindex uniquement lors
  de la mise en ligne réelle, après validation des contenus et fonctionnalités.
- Développer séparément les fonctions techniques dans une prochaine étape,
  avec les mesures de sécurité et de protection des données appropriées.

## Modifier facilement
Textes et coordonnées : index.html, rechercher « à compléter ».
Couleurs : variables :root en tête de style.css.
Espacements et grille : .container, .section, .hero-grid, .services-grid.
Responsive : blocs @media en fin de style.css.
Images : remplacer les fichiers de images/ et ajuster les textes alternatifs.
Signature : rechercher PROPRETÉ dans index.html.
Après une modification des sources séparées, le fichier autonome et les captures
ne se mettent pas à jour automatiquement : les régénérer si nécessaire.
