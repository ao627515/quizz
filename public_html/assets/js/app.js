document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const quitBtn = document.getElementById('quit-btn');
  const questionContainer = document.getElementById('question-container');
  const categoryElement = document.getElementById('category');
  const questionElement = document.getElementById('question');
  const answerElement = document.getElementById('answer');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  let questions = [];
  let currentQuestionIndex = 0;
  let previousQuestions = [];

  // Fonction de démarrage du quizz
  startBtn.addEventListener('click', async () => {
    // startBtn.classList.add('hidden');
    startBtn.style.display = 'none';
    quitBtn.classList.remove('hidden'); // Afficher le bouton "Quitter"
    await loadQuestions(); // Charger les questions
    displayQuestion(); // Afficher la première question
  });

  // Fonction pour quitter le quizz
  quitBtn.addEventListener('click', () => {
    resetGame();
  });

  // Fonction pour afficher la question suivante
  nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
      previousQuestions.push(questions[currentQuestionIndex]); // Ajouter la question actuelle à l'historique
      currentQuestionIndex++; // Passer à la question suivante
      displayQuestion();
    } else {
      alert('Vous avez terminé le quizz!');
      resetGame();
    }
  });

  // Fonction pour revenir à la question précédente
  prevBtn.addEventListener('click', () => {
    if (previousQuestions.length > 0) {
      currentQuestionIndex--; // Reculer dans l'index
      questions[currentQuestionIndex] = previousQuestions.pop(); // Récupérer la dernière question précédente
      displayQuestion();
    }
  });

  // Charger les questions depuis le fichier JSON
  async function loadQuestions() {
    try {
      const response = await fetch('../data/QUIZZ.json'); // Charger les questions
      questions = await response.json(); // Stocker les questions
      shuffleArray(questions); // Mélanger les questions
    } catch (error) {
      console.error('Erreur lors du chargement des questions :', error);
    }
  }

  // Afficher une question
  function displayQuestion() {
    if (questions.length === 0 || currentQuestionIndex >= questions.length) {
      alert('Aucune question disponible ou le quizz est terminé.');
      resetGame();
      return;
    }

    const question = questions[currentQuestionIndex];
    questionContainer.classList.remove('hidden'); // Afficher le conteneur des questions

    categoryElement.textContent = `Catégorie : ${question.categorie}`;
    questionElement.textContent = `Question : ${question.question}`;
    answerElement.textContent = `Réponse : ${question.reponse}`;
    answerElement.classList.remove('hidden'); // Assurer que la réponse est visible

    // Gérer la visibilité des boutons
    prevBtn.classList.toggle('hidden', previousQuestions.length === 0); // Masquer le bouton "Précédent" si aucune question précédente
    nextBtn.classList.toggle('hidden', currentQuestionIndex >= questions.length - 1); // Masquer le bouton "Suivant" si c'est la dernière question
  }

  // Réinitialiser le jeu
  function resetGame() {
    questions = [];
    previousQuestions = [];
    currentQuestionIndex = 0;

    // startBtn.classList.remove('hidden'); // Réafficher le bouton "Commence"
    startBtn.style.display = 'block';
    questionContainer.classList.add('hidden'); // Cacher le conteneur des questions
    quitBtn.classList.add('hidden'); // Masquer le bouton "Quitter"
    prevBtn.classList.add('hidden'); // Masquer le bouton "Précédent"
    nextBtn.classList.add('hidden'); // Masquer le bouton "Suivant"
  }

  // Mélanger un tableau (utilisé pour mélanger les questions)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
});
