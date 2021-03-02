const input = document.getElementById("villes");
const button = document.getElementById("button");
let listeMeteo = document.querySelector("#listeInfos");


let url = 'https://api.openweathermap.org/data/2.5/weather?q=marseille&appid=ebbef056fabd1f5c3932576f5181de0c';



function meteoCity(nameRandom) {


    
    listeMeteo.innerHTML = '';

    // Fetch: Requete HTTP - Fetch signifie " chercher "

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${nameRandom}&units=metric&lang=fr&appid=ebbef056fabd1f5c3932576f5181de0c`)
        .then(Response => Response.json())
        .then(data => {
             
            // Boucle "for" , tant que i est inférieur à 5, incrémentation de +1
            for (let i = 0; i < 5; i++) {

                listeMeteo.insertAdjacentHTML("beforeend", `<li><p>${data.list[i].dt_txt}, degrés: ${data.list[i].main.temp}°C</p></li>`)
                // Sert à écrire dans la page HTML 
            }

            console.log(data)
        })

}

button.addEventListener('click', () => {
    meteoCity(input.value)
});

