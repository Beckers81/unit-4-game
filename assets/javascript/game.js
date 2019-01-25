$( document ).ready(function(){
     var Random = Math.floor(Math.random()*101+19)

     $('#randomNumberBox').text(Random);
     var crystalOne = Math.floor(Math.random()*11+1);
     var crystalTwo = Math.floor(Math.random()*11+1);
     var crystalThree = Math.floor(Math.random()*11+1);
     var crystalFour = Math.floor(Math.random()*11+1);
     var userTotal = 0; 
     var wins= 0;
     var losses = 0;
    


   $('#wins').text(wins);
   $('#losses').text(losses);
   
   function reset(){
         Random = Math.floor(Math.random()*101+19);
         $('#randomNumberBox').text(Random);
         crystalOne= Math.floor(Math.random()*11+1);
         crystalTwo= Math.floor(Math.random()*11+1);
         crystalThree= Math.floor(Math.random()*11+1);
         crystalFour= Math.floor(Math.random()*11+1);
         userTotal= 0;
         $('#userTotal').text(userTotal);
         } 
   function yay(){
   alert("You won!");
   console.log('wins: ', wins);
   wins++;
   console.log('wins: ', wins);
     $('#wins').text(wins);
     reset();
   }
   function loser(){
   alert ("You lose!");
     losses++;
     $('#losses').text(losses);
     reset()
   }
     $('#crystalOne').on ('click', function(){
       userTotal = userTotal + crystalOne;
       console.log("New userTotal= " + crystalOne);
       $('#userTotal').text(userTotal); 
           if (userTotal == Random){
             yay();
           }
           else if ( userTotal > Random){
             loser();
           }   
     })  
     $('#crystalTwo').on ('click', function(){
          userTotal = userTotal + crystalTwo;
          console.log("New userTotal= " + crystalTwo);
          $('#userTotal').text(userTotal); 
              if (userTotal == Random){
                yay();
              }
              else if ( userTotal > Random){
                loser();
              }   
        })  
     $('#crystalThree').on ('click', function(){
       userTotal = userTotal + crystalThree;
       console.log("New userTotal= " + userTotal);
       $('#userTotal').text(userTotal);

             if (userTotal == Random){
             yay();
           }
           else if ( userTotal > Random){
             loser();
           } 
     })  
     $('#crystalFour').on ('click', function(){
          userTotal = userTotal + crystalFour;
          console.log("New userTotal= " + userTotal);
          $('#userTotal').text(userTotal);
   
                if (userTotal == Random){
                yay();
              }
              else if ( userTotal > Random){
                loser();
              } 
        })  
     });   
    