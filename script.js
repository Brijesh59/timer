
let timer = setInterval(function() {

    let lastMeetDate = new Date("June 17, 2019 18:37:25").getTime();
    let todayDate = new Date().getTime();
    let distance = todayDate - lastMeetDate;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("day").innerHTML = days
    document.getElementById("hr").innerHTML = hours
    document.getElementById("min").innerHTML = minutes
    document.getElementById("sec").innerHTML = seconds

    // if (distance < 0) {
    //   clearInterval(timer);
    // }
  }, 1000);


  window.onload = timer
