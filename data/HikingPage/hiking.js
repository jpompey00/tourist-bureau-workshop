"use strict";

let hikes = [
   {
      id: "H101",
      name: "Birding Loop",
      description: "The Birding Loop takes you through cedar forests, open plains, and beautiful spring time creeks.  Along the way, you might see some of out 225 annually recorded bird species, including the beautiful Painted Bunting, the adorable Tufted Titmouse, or even a high-flying Red-Tailed Hawk. The terrain is generally flat and the trail is well marked.",
      scenicImage: "birding_loop_1.png",
      trailMapImage: "birding_loop_2.png",
      length: "2.3 miles",
      difficulty: 2
   },
   {
      id: "H102",
      name: "Deep Blue Pool Trail",
      description: "This gem features an amazing natural pool surrounded by overhanging cliffs.  A 1-mile trail leads down to the pool from the parking lot. The trail is moderately steep, requiring solid footwork but the destination is worth the walk!",
      scenicImage: "deep_blue_1.png",
      trailMapImage: "deep_blue_2.png",
      length: "2 miles",
      difficulty: 2
   },
   {
      id: "H103",
      name: "Overlook Trail",
      description: "The Overlook Trail offers a sweeping view of the valley on this quick, but steep, trail. Keep a close eye on small children and do not get too close to exposed edges.",
      scenicImage: "overlook_trail_1.png",
      trailMapImage: "overlook_trail_2.png",
      length: ".7 miles",
      difficulty: 2
   },
];


//dropdown element
const hikingDropdown = document.getElementById("hikingDropdown");

//output
const trailImageElement = document.getElementById("trailImageElement");
const scenicImageElement = document.getElementById("scenicImageElement");
const hikingDescription = document.getElementById("hikingDescription");

const hikingLength = document.getElementById("hikingLength");
const hikingDifficulty = document.getElementById("hikingDifficulty");



window.onload = function () {
   loadDropDown();
   hikingDropdown.onchange = onHikingDropdownChanged;
}

//load the dropdown
function loadDropDown(){
   let theOption = new Option("Select One", "");
   hikingDropdown.appendChild(theOption);
   for(let hike of hikes){
      theOption = new Option(hike.name , hike.id);
      hikingDropdown.append(theOption);
   }

}


//on dropdown change
function onHikingDropdownChanged(){
   if(hikingDropdown.value != ""){
      for(let hike of hikes){
         if(hike.id == hikingDropdown.value){
            hikingDescription.innerHTML = hike.description;
            hikingDifficulty.innerHTML = `Hike difficulty: ${hike.difficulty}`;
            hikingLength.innerHTML = `Hike length: ${hike.length}`;
            trailImageElement.setAttribute("src", `data\\HikingPage\\${hike.trailMapImage}`);
            scenicImageElement.setAttribute("src", `data\\HikingPage\\${hike.scenicImage}`);
            
         }
      }
   } else {
      resetDropDown();
   }

}

//clear the page when the default is selected

function resetDropDown(){
   if(hikingDropdown.value == ""){
      hikingDescription.innerHTML = "";
      trailImageElement.setAttribute("src", "");
      scenicImageElement.setAttribute("src", "");
   }
}