$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.attack-button').click(clickedAttackButton);
  
})
  
// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = {
  name: "Agumon",
  weight: 10,
  happiness: 5,
  attacks: ["Baby Flame", "Claw Attack", "Splash Kick", "Spitfire Blast", "Super Pepper Breath"]
};

//var attacks = ["Baby Flame", "Claw Attack", "Splash Kick", "Spitfire Blast", "Super Pepper Breath"];

function clickedTreatButton() {
  alert(pet_info.name + " munching his treat happily..");

  pet_info.happiness++; // Increase pet happiness
  pet_info.weight++; // Increase pet weight
  
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  alert(pet_info.name + " feels very happy, but is a bit tired..");

  pet_info.happiness++; // Increase pet happiness
  pet_info.weight--; // Decrease pet weight
  
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  alert(pet_info.name + " is tired running around..");

  pet_info.happiness--; // Decrease pet happiness
  pet_info.weight--; // Decrease pet weight
  
  checkAndUpdatePetInfoInHtml();
}

function clickedAttackButton() {

  if (pet_info.happiness == 0) {
    alert(pet_info.name + " is unhappy and won't obey you!");
  }
  else {
    var choice = $('.attack-choice').val(); // get value from input box (jQuery)
    
    if (choice == 0 || choice > 5) {
      alert(pet_info.name + " says, \"don't ask for a ridiculous attacks, dude..\"");
    }
    else if (pet_info.weight < choice*2) {
      alert(pet_info.name + " don't have enough food for that attack");
    }
    else {
      alert(pet_info.name + " attacks using " + pet_info.attacks[choice-1]);

      pet_info.happiness--; // Decrease pet happiness

      // Decrease pet weight by choice*2
      pet_info.weight -= (choice*2);

      checkAndUpdatePetInfoInHtml();
    }
  }
}

function checkAndUpdatePetInfoInHtml() {
  // resetting if any value lower than 0 
  checkWeightAndHappinessBeforeUpdating();
  // send the info back to HTML
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero, set it back to zero
  if (pet_info.weight <= 0) pet_info.weight = 0;

  // also doing the same for happiness level
  if (pet_info.happiness <= 0) pet_info.happiness = 0;
}

// Updates your HTML with the current values in your pet_info dictionary
function updatePetInfoInHtml() {
  $('.name').text(pet_info['name']);
  $('.weight').text(pet_info['weight']);
  $('.happiness').text(pet_info['happiness']);

  // listing out attacks based on weight
  var attacklists = "";
  for (let index = 1; index <= pet_info.attacks.length; index++) {
    if (pet_info.weight >= index*2) {
      attacklists += (index + ". " + pet_info.attacks[index-1] + " "); 
    }
    $('.attacks').text(attacklists);
  }
}
