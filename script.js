// Random greeting message
const greetings = [
    "Welcome to Unique School!",
    "Shaping the Leaders of Tomorrow!",
    "Empowering Future Innovators!",
    "Where Learning Meets Fun!",
    "Inspiring Excellence Every Day!"
];

function getRandomGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    document.getElementById("greetingMessage").innerText = greetings[randomIndex];
}

// Load random greeting when page loads
window.onload = getRandomGreeting;

// Add Feature Boxes dynamically
const features = [
    { name: 'Neat and Clean Toilets', img: 'toilets.jpg' },
    { name: 'Computer Lab', img: 'computer-lab.jpg' },
    { name: 'Physics Lab', img: 'physics-lab.jpg' },
    { name: 'Chemistry Lab', img: 'chemistry-lab.jpg' },
    { name: 'Atal Lab', img: 'atal-lab.jpg' },
    { name: 'Smart Class', img: 'smart-class.jpg' },
    { name: 'Experienced Teachers', img: 'teachers.jpg' }
];

const featureBoxContainer = document.querySelector('.feature-boxes');

features.forEach(feature => {
    const box = document.createElement('div');
    box.classList.add('feature-box');
    box.innerHTML = `<img src="${feature.img}" alt="${feature.name}"><h3>${feature.name}</h3>`;
    featureBoxContainer.appendChild(box);
});
