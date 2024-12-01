# **Quizz** 🧠

**Quizz** est une application web simple et intuitive développée avec **HTML**, **CSS**, et **JavaScript**, qui propose une expérience ludique de quiz. Les questions sont stockées dans un fichier JSON et présentées via une interface utilisateur interactive.

---

## **Fonctionnalités** 🚀

- **Lecture de quiz** : Affiche des questions extraites d’un fichier JSON.
- **Navigation interactive** : Passez d'une question à une autre facilement.
- **Gestion des sessions** : Démarrez et arrêtez le quiz à tout moment.
- **Catégorisation** : Support des catégories comme débutant, intermédiaire, etc.

---

## **Installation et exécution** 🛠️

### **Prérequis**

- Un navigateur web moderne (Chrome, Firefox, etc.).
- Un éditeur de code pour personnaliser les questions (si nécessaire).

### **Étapes d’installation**

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/ao627515/quizz.git
   cd  quizz
   ```
2. Ouvrez le fichier `index.html` directement dans un navigateur.

---

## **Structure du projet** 📂

- `index.html` : La page principale de l’application.
- `style.css` : Les styles de l’interface utilisateur.
- `app.js` : La logique principale pour afficher les questions et gérer les interactions.
- `Quizz.json` : Le fichier contenant les questions et réponses.

---

## **Personnalisation** ✨

1. **Ajouter des questions** :

   - Ouvrez le fichier `Quizz.json`.
   - Ajoutez des objets avec le format suivant :
     ```json
     {
       "categorie": "intermédiaire",
       "question": "Qu'est-ce qu'un navigateur web ?",
       "reponse": "Un logiciel utilisé pour accéder aux pages web sur Internet."
     }
     ```

2. **Modifier le style** :
   - Ouvrez `style.css` pour personnaliser les couleurs, les polices ou l’apparence générale.

---

## **Utilisation** 📖

1. Lancez l’application en ouvrant `index.html` dans un navigateur.
2. Cliquez sur **Démarrer** pour commencer le quiz.
3. Naviguez entre les questions avec les boutons **Suivant** et **Précédent**.
4. Cliquez sur **Arrêter** pour terminer la session en cours.

---

## **Améliorations futures** 🔧

- Ajout d’un système de score.
- Création d’une base de données dynamique pour charger les quiz.
- Intégration d’un chronomètre pour limiter le temps de réponse.
- Adaptation pour mobile via des techniques de responsive design.

---

## **Auteur** 👤

- **ao627515**
  - GitHub : [ao627515](https://github.com/ao627515)

---
