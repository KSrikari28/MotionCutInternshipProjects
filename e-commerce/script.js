

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');
    const registerToggle = document.getElementById('registerToggle');
    const loginToggle = document.getElementById('loginToggle');
    const loginCard = document.querySelector('.auth-card:not(.hidden)');
    const registerCard = document.querySelector('.auth-card.hidden');

    registerToggle.addEventListener('click', function (e) {
        e.preventDefault();
        loginCard.classList.add('hidden');
        registerCard.classList.remove('hidden');
    });

    loginToggle.addEventListener('click', function (e) {
        e.preventDefault();
        registerCard.classList.add('hidden');
        loginCard.classList.remove('hidden');
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Perform login form submission and validation here
    });

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Perform registration form submission and validation here
    });
  });

    const content = document.querySelector('.content');
const phrases = [
  "Welcome to VitalsFit - Your Ultimate Healthcare Ecommerce Destination!",
  "Explore our diverse selection of high-quality products.",
  "Empowering you on your journey to optimal health and well-being.",
  "Discover a healthier lifestyle with VitalsFit.",
];

let phraseIndex = 0;
let charIndex = 0;
let isFirstTime = true;

function typePhrase() {
  if (isFirstTime) {
    content.innerHTML = content.innerHTML.trim(); // Remove leading/trailing whitespace
    isFirstTime = false;
  }

  if (charIndex < phrases[phraseIndex].length) {
    content.innerHTML += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typePhrase, 50);
  } else {
    setTimeout(erasePhrase, 2000);
  }
}

function erasePhrase() {
  if (charIndex > 0) {
    content.innerHTML = content.innerHTML.slice(0, -1); // Remove the last character
    charIndex--;
    setTimeout(erasePhrase, 30);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typePhrase, 500);
  }
}

typePhrase(); 


// const facts = [
//   "Regular exercise can improve your mood and reduce feelings of anxiety and depression.",
//   "Drinking water can help you lose weight by increasing your metabolism.",
//   "Getting enough sleep is crucial for maintaining a healthy weight and overall well-being.",
//   "Eating a balanced diet rich in fruits, vegetables, and whole grains can reduce the risk of chronic diseases.",
//   "Stretching can improve flexibility, reduce muscle tension, and prevent injuries.",
//   "Cardiovascular exercises like running and swimming are great for improving heart health.",
//   "Strength training can increase muscle mass and boost metabolism, helping with weight management.",
//   "Yoga and meditation can help reduce stress and improve mental clarity.",
//   "Walking is a simple and effective form of exercise that can improve cardiovascular health.",
// ];

// const factElement = document.getElementById("fact");
// const generateButton = document.getElementById("generate");

// generateButton.addEventListener("click", generateRandomFact);

// function generateRandomFact() {
//   const randomIndex = Math.floor(Math.random() * facts.length);
//   factElement.textContent = facts[randomIndex];
// }

var slides = document.querySelectorAll('.slide');
var currentSlideIndex = 0;

function showNextSlide() {
    slides[currentSlideIndex].querySelector('.slide-num').style.display = 'none';
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].querySelector('.slide-num').style.display = 'block';
}

showNextSlide(); // Show the first image immediately

setInterval(showNextSlide, 20000); // Show subsequent images every 20 seconds



