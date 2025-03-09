function generateDestination(event) {
  event.preventDefault();

  let destination = document.querySelector("#user-output");
  destination.innerHTML= "heloo"
  new Typewriter("#user-output", {
    strings: ( "The best place to travel is..."),
    autoStart: true,
    delay: 30,
    cursor:null,
  });
}

let travelDestination = document.querySelector("#container");
travelDestination.addEventListener("submit", generateDestination);
