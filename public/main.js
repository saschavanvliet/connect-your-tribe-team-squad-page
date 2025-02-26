document.getElementById("like").addEventListener("click", function(){
    // Selecteer het like count element
    const likeCount = document.getElementById("like-count");
    
    // huidige tekst vervangen met optelsom 
    // parseInt = zet text om naar cijfers
    likeCount.textContent = parseInt(likeCount.textContent) +1;
})

