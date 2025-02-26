document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-button');
    const menu = document.getElementById('menu');

    // Open of sluit het menu wanneer op het icoon wordt geklikt
    hamburger.addEventListener('click', (event) => {
        menu.classList.toggle('open');
        event.stopPropagation(); // Voorkomt dat de klik ook het document-event triggert
    });

    // Sluit het menu wanneer ergens buiten het menu wordt geklikt
    document.addEventListener('click', (event) => {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
        }
    });
});

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
