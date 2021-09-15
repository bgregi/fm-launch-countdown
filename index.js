let launchDate = new Date().getTime() + (1000 * 60 * 60 * 24 * 99)

// Update the count down every 1 second
let x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();


    // Find the distance between now and the count down date
    let distance = launchDate - now;


    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the results in each div
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

}, 1000)


let iconFb = document.getElementById("facebook")
let iconIg = document.getElementById("instagram")
let iconPinterest = document.getElementById("pinterest")


function iconHighlight(event) {
    event.target.src = "images/icon-" + event.target.id + "-red.svg"
}
function iconHighlightOut(event) {
    event.target.src = "images/icon-" + event.target.id + ".svg"
}

iconFb.addEventListener("mouseover", iconHighlight)
iconIg.addEventListener("mouseover", iconHighlight)
iconPinterest.addEventListener("mouseover", iconHighlight)

iconFb.addEventListener("mouseleave", iconHighlightOut)
iconIg.addEventListener("mouseleave", iconHighlightOut)
iconPinterest.addEventListener("mouseleave", iconHighlightOut)