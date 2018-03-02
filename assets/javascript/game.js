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
  
    function reset(){
      userScore = 0;
      targetNumber = Math.floor(Math.random() * 100 + 20);
      $("#target-number").text("Target Number: " + targetNumber); 
      green = Math.floor(Math.random() * 9) + 1;
      purple = Math.floor(Math.random() * 9) + 1;
      yellow = Math.floor(Math.random() * 9) + 1;
      blue = Math.floor(Math.random() * 9) + 1;
    } 

    $('#crystal1').on ('click', function(){
      userScore = userScore + green;
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
    
    })
    
    $('#crystal2').on ('click', function(){
      userScore = userScore + purple;
      $("#user-score").text("Your Score: " + userScore); 
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
    })
    
    $('#crystal3').on ('click', function(){
      userScore = userScore + yellow;
      $('#user-score').text("Your Score: " + userScore); 
      if (userScore == targetNumber){
        wins++;
        alert("Hey, you won!");
        $('#wins').text("Wins: " + wins);
        reset();
      }
      else if (userScore > targetNumber){
        losses++
        alert("Oops... You lost!"); 
        $('#losses').text("Losses: " + losses);
        reset();
      }   
    })

    $('#crystal4').on ('click', function(){
      userScore = userScore + blue;
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
