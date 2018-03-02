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
    
    var numberOptions = [2, 5, 6, 9];

    
    function reset(){
      var targetNumber = Math.floor(Math.random() * 100 + 20);
      $("#target-number").text("Target Number: " + targetNumber); 
      green = Math.floor(Math.random()*11+1);
      purple = Math.floor(Math.random()*11+1);
      yellow = Math.floor(Math.random()*11+1);
      blue = Math.floor(Math.random()*11+1);
      
    } 

    function wins(){
      alert("Hey, you won!");
      wins++; 
      $('#wins').text("Wins: " + wins);
      reset();
    }

    function losses(){
      alert("Oops... You lost!");
      losses++; 
      $('#losses').text("Losses: " + losses);
      reset();
    }

    $('#crystal1').on ('click', function(){
      newUserScore = userScore + green;
      $('#user-score').text(newUserScore);
        console.log(newUserScore);
      if (newUserScore == targetNumber){
        wins();
      }
      else if ( newUserScore > targetNumber){
        losses();
      }
    
    
    $('#crystal2').on ('click', function(){
      newUserScore = userScore + purple;
      $("#user-score").text("Your Score: " + newUserScore); 
      if (newUserScore == targetNumber){
        wins();
      }
      else if ( newUserScore > targetNumber){
        losses();
      }  
    })
    
    $('#crystal3').on ('click', function(){
      newUserScore = userScore + yellow;
      $('#user-score').text(newUserScore); 
      if (newUserScore == targetNumber){
        wins();
        }
      else if ( newUserScore > targetNumber){
        losses();
      }   
    })

    $('#crystal4').on ('click', function(){
      newUserScore = userScore + blue;
      $('#user-score').text(newUserScore); 
      if (newUserScore == targetNumber){
        wins();
      }
      else if ( newUserScore > targetNumber){
        losses();
      } 
    });
  });

}) 
