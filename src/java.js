function showDestination(response) {
  console.log(response.data.answer)
   new Typewriter("#user-output", {
     strings: response.data.answer,
     autoStart: true,
     delay: 30,
     cursor: null,
   });
}



function generateDestination(event) {
  event.preventDefault();

let userInput = document.querySelector("#user-input")
let apiKey = "t0dbadd020obaf40a394084940d3fadf";
let context =
  "You are a well informed travel assistant that knows what people want when they travel, from weather conditions to the best time to travel.Include the best time to travel to the destination.Paraphrase the answer and make it short-versioned";
let prompt = `Provide the best place in the enitre world to travel to according to the weather selected in ${userInput.value}`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;



  let destination = document.querySelector("#user-output");
  destination.classList.remove("hidden");
  destination.innerHTML = `<div class="traveling">🧳😎🌍lets travel ....</div>`;
 
  axios.get(apiUrl).then(showDestination);

}

let travelDestination = document.querySelector("#container");
travelDestination.addEventListener("submit", generateDestination);
