document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-button');
    const menu = document.getElementById('menu');

    // Open of sluit het menu wanneer op het icoon wordt geklikt
    hamburger.addEventListener('click', (event) => {
        menu.classList.toggle('open');
        hamburger.classList.toggle('open');
        event.stopPropagation(); // Voorkomt dat de klik ook het document-event triggert
    });

    // Sluit het menu wanneer ergens buiten het menu wordt geklikt
    document.addEventListener('click', (event) => {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
        }
    });
});

// like buttons
document.getElementById("like_h").addEventListener("click", function(){
    // Selecteer het like count element
    const likeCount = document.getElementById("like-count_h");
    
    // huidige tekst vervangen met optelsom 
    // parseInt = zet tekst om naar cijfers
    likeCount.textContent = parseInt(likeCount.textContent) +1;
})

document.getElementById("like_g").addEventListener("click", function(){
    // Selecteer het like count element
    const likeCount = document.getElementById("like-count_g");
    
    // huidige tekst vervangen met optelsom 
    // parseInt = zet tekst om naar cijfers
    likeCount.textContent = parseInt(likeCount.textContent) +1;
})


let likeButton = document.querySelectorAll('.hartje');

// Voeg een klik event listener toe aan elke button
likeButton.forEach(likeButton => {
    likeButton.addEventListener('click', geklikt);
});

function geklikt(event) {
    // Het huidige like button element
    let likeButton = event.currentTarget;

    // Voeg clicked toe om hart te vullen
    likeButton.classList.add('clicked');
}