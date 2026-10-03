# EV Menuiserie & Pose — site vitrine

Site vitrine de **EV Menuiserie & Pose**, menuisier en aluminium, PVC, bois et mixte alu/bois en Dordogne (24). Il s'agit d'une refonte du site [ev-menuiserie-pose.fr](https://www.ev-menuiserie-pose.fr) : même structure, mêmes contenus, même logo et mêmes photos, avec une nouvelle charte graphique et une mise en page responsive.

Le site est une page unique en HTML, CSS et JavaScript, sans framework ni étape de compilation. Il est conçu pour être publié tel quel sur **GitHub Pages**.

---

## Sommaire

- [Aperçu](#aperçu)
- [Structure du dépôt](#structure-du-dépôt)
- [Mise en ligne sur GitHub Pages](#mise-en-ligne-sur-github-pages)
- [Tester en local](#tester-en-local)
- [Photos et logo](#photos-et-logo)
- [Formulaire de contact](#formulaire-de-contact)
- [Personnalisation](#personnalisation)
- [Accessibilité et compatibilité](#accessibilité-et-compatibilité)
- [À faire avant la mise en production](#à-faire-avant-la-mise-en-production)

---

## Aperçu

La page reprend les rubriques du site d'origine, accessibles depuis le menu :

| Rubrique | Contenu |
| --- | --- |
| **Accueil** | Bandeau d'accroche, atouts, présentation de l'entreprise, prestations et matériaux |
| **Vérandas** | Présentation de l'activité vérandas, avec une mosaïque de photos |
| **Photos** | Galerie de 50 réalisations, filtrable par catégorie, avec visionneuse plein écran |
| **Plan** | Adresse, coordonnées et carte Google Maps intégrée, avec un lien vers l'itinéraire |
| **Nous contacter** | Formulaire de contact avec mention RGPD et consentement |

Fonctionnalités :

- mise en page adaptée au mobile, à la tablette et à l'ordinateur ;
- menu mobile avec bouton « burger » ;
- galerie avec filtres, chargement progressif (« voir plus ») et visionneuse au clavier et au doigt ;
- vérification des champs du formulaire avant envoi ;
- adresse e-mail protégée des robots collecteurs ;
- boutons de partage (Facebook, X, LinkedIn, e-mail) ;
- animations discrètes, désactivées si le visiteur a choisi de réduire les animations.

---

## Structure du dépôt

```
.
├── index.html     # Contenu et structure de la page
├── style.css      # Charte graphique et mise en page responsive
├── script.js      # Galerie, visionneuse, menu, formulaire, partage
├── images/        # (à créer) logo et photos en local — facultatif
│   ├── logo.png
│   └── <identifiant>.jpg
└── README.md
```

---

## Mise en ligne sur GitHub Pages

1. Créez un dépôt sur GitHub et déposez-y les fichiers à la racine.
2. Ouvrez **Settings → Pages**.
3. Dans **Build and deployment**, choisissez **Deploy from a branch**, puis la branche `main` et le dossier `/ (root)`.
4. Enregistrez. Le site est publié en quelques minutes à l'adresse `https://<utilisateur>.github.io/<dépôt>/`.

Pour utiliser le nom de domaine `ev-menuiserie-pose.fr`, renseignez-le dans **Settings → Pages → Custom domain** et configurez les enregistrements DNS chez le registraire, comme indiqué dans la [documentation GitHub](https://docs.github.com/fr/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## Tester en local

Il suffit d'ouvrir `index.html` dans un navigateur. Pour un comportement identique à la mise en ligne, lancez plutôt un petit serveur local depuis le dossier du projet :

```bash
# avec Python
python3 -m http.server 8000

# ou avec Node.js
npx serve .
```

Puis ouvrez `http://localhost:8000`.

---

## Photos et logo

Toutes les images utilisent des **liens relatifs** vers le dossier `images/` :

- logo : `images/logo.png` ;
- photos : `images/<identifiant>.jpg`, où l'identifiant est celui de la photo sur le site d'origine (par exemple `images/1ef1e8f4-dcee-4ea2-a5eb-59fd9be2c9b4.jpg`).

**Le dossier `images/` est facultatif au départ.** Si une photo n'y est pas, elle est chargée automatiquement depuis l'hébergement du site actuel. Le site s'affiche donc complètement dès sa mise en ligne.

Pour rendre le site autonome :

1. Téléchargez les photos depuis le site d'origine.
2. Renommez-les avec leur identifiant seul, sans le suffixe `-1600` (exemple : `1ef1e8f4-…-1600.jpg` devient `1ef1e8f4-….jpg`).
3. Déposez-les dans `images/`, avec le logo sous le nom `logo.png`.

La liste complète des identifiants figure dans le tableau `PHOTOS`, au début de `script.js`.

Si `images/logo.png` est absent, le logo est remplacé par le nom de l'entreprise en texte.

### Ajouter, retirer ou reclasser une photo

Modifiez le tableau `PHOTOS` dans `script.js`. Chaque ligne décrit une photo :

```js
{ id: "identifiant-de-la-photo", cat: "verandas", t: "Légende affichée", s: "wide" }
```

- `cat` : catégorie, parmi `verandas`, `fenetres`, `portes`, `garde-corps`, `fermetures`, `toitures`, `atelier` ;
- `t` : légende, aussi utilisée comme texte alternatif ;
- `s` (facultatif) : `wide` pour une vignette large, `tall` pour une vignette haute dans la vue « Toutes ».

Les catégories et leurs libellés se modifient dans l'objet `CATEGORIES`, juste au-dessus.

---

## Formulaire de contact

GitHub Pages n'héberge que des pages statiques : aucun code ne peut s'exécuter côté serveur pour envoyer un e-mail. Le formulaire propose donc deux modes, réglés en haut de `script.js` :

```js
const CONFIG = {
  FORM_ENDPOINT: "",   // vide = ouverture de la messagerie du visiteur
  ...
};
```

- **Sans configuration** (`FORM_ENDPOINT` vide) : à l'envoi, la messagerie du visiteur s'ouvre avec un message déjà rempli, adressé à `evmenuiserie@gmail.com`. Le visiteur doit encore cliquer sur « Envoyer » dans sa messagerie, et ce mode ne fonctionne pas s'il n'a pas de logiciel de messagerie configuré.
- **Avec un service de formulaire** : créez un formulaire chez un service comme [Formspree](https://formspree.io), [Getform](https://getform.io) ou [Web3Forms](https://web3forms.com), puis collez l'URL fournie dans `FORM_ENDPOINT`. Les messages arrivent alors directement par e-mail, sans action supplémentaire du visiteur. **C'est le mode recommandé pour la production.**

Un champ invisible (`_gotcha`) filtre une partie des robots de spam.

---

## Personnalisation

### Couleurs et typographies

Toute la charte est regroupée dans les variables au début de `style.css` :

```css
:root {
  --c-ink: #1d2226;      /* anthracite (RAL 7016) */
  --c-accent: #9c6b3b;   /* chêne doré */
  --c-sand: #f5f1ea;     /* fond sable */
  ...
}
```

Les polices (Barlow et Barlow Condensed) sont chargées depuis Google Fonts dans `index.html`.

### Couleur du logo

Le logo d'origine est rouge. Il est affiché en anthracite grâce à un filtre CSS sur `.brand__logo`. Pour retrouver les couleurs d'origine, supprimez la ligne `filter` correspondante dans `style.css`. Le mieux reste de fournir une version du logo directement dans la nouvelle couleur, de préférence au format SVG.

### Textes et coordonnées

Les textes, l'adresse, le téléphone et la carte se modifient dans `index.html`. L'adresse e-mail est définie à deux endroits :

- dans `index.html`, par les attributs `data-u` et `data-d` des liens `js-mail` ;
- dans `script.js`, par `CONTACT_EMAIL`, utilisé par le formulaire.

---

## Accessibilité et compatibilité

- Navigation complète au clavier, y compris dans la visionneuse (flèches, Échap, Tab).
- Textes alternatifs sur toutes les photos, libellés sur tous les champs et boutons.
- Contrastes de couleurs conformes au niveau AA pour les textes et boutons principaux.
- Animations désactivées si le système du visiteur demande de réduire les mouvements.
- Compatible avec les versions récentes de Chrome, Firefox, Safari et Edge, sur ordinateur et mobile.

---

## À faire avant la mise en production

- [ ] Ajouter le logo dans `images/logo.png`, idéalement dans une version aux nouvelles couleurs.
- [ ] Rapatrier les photos dans `images/` pour ne plus dépendre de l'ancien hébergement.
- [ ] Configurer un service de formulaire (`FORM_ENDPOINT`).
- [ ] Rédiger une page de mentions légales et de politique de confidentialité propre au nouveau site. Les liens du pied de page renvoient pour l'instant vers l'ancien site.
- [ ] Vérifier l'affichage sur plusieurs téléphones et navigateurs après publication.
- [ ] Si un nom de domaine est utilisé, mettre à jour les balises de partage (`og:url`, image de partage) dans `index.html`.

---

© EV Menuiserie & Pose — 6 Résidence Château de Gurson, 24610 Carsac-de-Gurson — 06 13 29 65 83
