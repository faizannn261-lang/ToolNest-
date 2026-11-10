const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML = "☀️";

    } else {

        themeBtn.innerHTML = "🌙";

    }

};


// Search Feature

const searchInput = document.querySelector(".searchBox input");

const cards = document.querySelectorAll(".card");


searchInput.addEventListener("keyup", function(){

    let searchText = searchInput.value.toLowerCase();


    cards.forEach(function(card){

        let cardText = card.innerText.toLowerCase();


        if(cardText.includes(searchText)){

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

const glow = document.querySelector(".cursor-glow");


if(glow){

glow.style.left = e.clientX + "px";

glow.style.top = e.clientY + "px";

}

});