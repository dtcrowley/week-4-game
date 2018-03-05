$(document).ready(function(){

  var targetNumber = Math.floor(Math.random() * 100 + 20);
  
  $("#target-number").text("Target Number: " + targetNumber); 

  
  var userScore = 0;

  $("#user-score").text("Your Score: " + userScore);    
  
  var wins = 0;
  $("#wins").text("Wins: " + wins);
  
  var losses = 0;
  $("#losses").text("Losses: " + losses)

  var green;
  var purple;
  var yellow;
  var blue;

  var numberOptions = [{
    name: "emerald", 
    url: "assets/images/emerald.png"
  }, 
  {
    name: "blue", 
    url: "assets/images/blue.png"
  }, 
  {
    name: "yellow",
    url: "assets/images/yellow.png"
  }, 
  {
    name: "purple",
    url: "assets/images/purple.png"
  }];

  function reset(){
    userScore = 0;
    $("#user-score").text("Your Score: " + userScore);
    targetNumber = Math.floor(Math.random() * 100 + 20);
    $("#target-number").text("Target Number: " + targetNumber); 

    function randNum () {
      return Math.floor(Math.random() * 9) + 1
    }

    $(".buttons").empty();

    var buttons = $(".buttons");


      
    for (var i = 0; i < numberOptions.length; i++){
      var imageCrystal = $("<img>");
// numberOptions = $("<img>");
      imageCrystal.addClass("crystal");

      imageCrystal.attr("src", numberOptions[i].url);

      imageCrystal.attr("data-crystalvalue", randNum());

      buttons.append(imageCrystal);
      
    }
  } 

  


  $(document).on ("click", ".crystal", function(){
    console.log(this);
    var number = $(this).attr("data-crystalvalue");
    number = parseInt(number);

    userScore = userScore + number;
    $('#user-score').text("Your Score: " + userScore);
    if (userScore == targetNumber){
      wins++;
      alert("Hey, you won!");
      $('#wins').text("Wins: " + wins);
      reset();
    }
    else if (userScore > targetNumber){
      losses++;
      alert("Oops... You lost!"); 
      $('#losses').text("Losses: " + losses);
      reset();        
    }  
  });

reset();

}) 
