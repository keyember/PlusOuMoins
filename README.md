# 🎮 Plus ou Moins ?

Petit jeu web en JavaScript où le joueur doit deviner un nombre secret entre 1 et 10.  
Le projet m’a servi d’exercice pour pratiquer le DOM, les événements et un système de thème light/dark.

---

## ✨ Fonctionnalités

- Génération d’un nombre secret aléatoire entre 1 et 10 à chaque partie.
- Indications « C’est plus » / « C’est moins » jusqu’à trouver la bonne réponse.
- Message de victoire et bouton **Rejouer** pour relancer une partie.
- Bouton **Light / Dark mode** basé sur `color-scheme` et `light-dark()`.
- Interface centrée en CSS avec Flexbox.

---

## 🛠️ Stack technique

- **HTML5** pour la structure.
- **CSS3** (Flexbox, `light-dark()`, `color-scheme`) pour le style et le thème.
- **JavaScript vanilla** pour la logique du jeu et la gestion des événements.

---

## 🚀 Installation & lancement

1. Cloner le dépôt :

git clone https://github.com/Alloudev/AO-plusOUmoins

2. Ouvrir le projet dans ton éditeur.

3. Lancer un petit serveur local (par exemple avec l’extension Live Server de VS Code) ou ouvrir `index.html` directement dans le navigateur.

---

## 📌 Règles du jeu

- Le jeu choisit un nombre secret entre 1 et 10 au début de chaque partie.
- Saisis un nombre dans le champ puis clique sur **Vérifier**.
- Le jeu t’indique si le nombre secret est plus grand ou plus petit.
- Quand tu trouves le bon nombre, un message de victoire s’affiche et tu peux cliquer sur **Rejouer** pour relancer une partie avec un nouveau nombre secret.

---

## 🔮 Améliorations possibles

- Compteur d’essais et meilleur score.
- Choix de la difficulté (plage 1–50, 1–100, etc.).
- Animations / feedback visuel au lieu des `alert()`.
