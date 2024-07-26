const targetdate = new Date("22 July 2024");


const UpdateCountDown= () => {
    const now = new Date();
    const difference = targetdate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours= Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    let Count = document.querySelector(".HomeMain .Countdown")
    Count.innerHTML = `
    <h3>${days} Days ${hours}   Hours ${minutes}   Minutes ${seconds}   Seconds</h3>
    `
}

UpdateCountDown()
setInterval(UpdateCountDown, 1000);

let Tournament = null;

fetch("Tournaments.json")
.then(response => response.json())
.then(data => {
    Tournament = data
    console.log(Tournament);
    AddToHTML();
    TourDescription();
})

function AddToHTML(){
    Tournament.forEach(items => {
        let Tournaments = document.querySelector(".Upcoming .Tournaments")
        let Tour = document.createElement("a");
        Tour.classList.add("Tour")
        Tour.href = `details.html?id=${items.id}`;
        Tour.innerHTML = ` <h2> ${items.date} </h2> `
        Tournaments.appendChild(Tour);
        
    })

}
