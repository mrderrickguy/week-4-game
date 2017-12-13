//Show random # 
// create an on click function to handle 4 crystals
//	within click have it generate a random number...
// When crystal is click it will add a point
// use jquery ... $.each() utility method...
//use a for loop function to go through that crystals
// make a math.random function

$( document ).ready(function(){
  var Random=Math.floor(Math.random()*10+101)
  
 $('#randomNumber').text(Random);
 
 
  var num1= Math.floor(Math.random()*9)+1;
  var num2= Math.floor(Math.random()*9)+1;
  var num3= Math.floor(Math.random()*9)+1;
  var num4= Math.floor(Math.random()*9)+1;
  
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
 
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

function reset(){
      Random=Math.floor(Math.random()*120+1);
     
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*9)+1;
      num2= Math.floor(Math.random()*9)+1;
      num3= Math.floor(Math.random()*9)+1;
      num4= Math.floor(Math.random()*9)+1;
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 

function Hooray(){

  wins++; 
  $('#numberWins').text(wins);
  reset();
}
function loser(){

  losses++;
  $('#numberLosses').text(losses);
  reset()
}

// when a player clicks crystal...

  $("#gem1").on ('click', function(event){
    userTotal = userTotal + num1;
     ("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal === Random){
        winner();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  $('#gem2').on ('click', function(event){
    userTotal = userTotal + num2;
   
    $('#finalTotal').text(userTotal); 
        if (userTotal === Random){
        winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#gem3').on ('click', function(event){
    userTotal = userTotal + num3;

    $('#finalTotal').text(userTotal);

          if (userTotal === Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#gem4').on ('click', function(event){
    userTotal = userTotal + num4;
    $('#finalTotal').text(userTotal); 
      
          if (userTotal === Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 

