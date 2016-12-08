$(document).ready(function() {
var pattern=[];
var playerPattern=[]; 
var power=0;  
var start=false;
var buttonEnabled=false;  
var tempo =1000; 
var strict = 0;  
  
$(".title, .on-label, .off-label, .start-label, .strict-label, .level p").disableSelection();  
  
  function playSequence() {
    var i=0;
    switch (pattern.length) {
      case 5:
        tempo=750;
        break;
      case 9:
        tempo=500;
        break;
      case 13:
        tempo=375;
        break;
    }
      var playPattern = setInterval(function(){
       switch (pattern[i]) {
        case 1: 
          $(".top-left").effect("highlight",500);
          var audio1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
          audio1.play();
          break;
        case 2:
          $(".top-right").effect("highlight",500);
          var audio2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
          audio2.play();
          break;
        case 3:
          $(".bottom-left").effect("highlight",500);
          var audio3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
          audio3.play();
          break;
        case 4:
          $(".bottom-right").effect("highlight",500);
          var audio4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
          audio4.play();  
          break;
                 }
        i++;
        
        if(i==pattern.length) {
          buttonEnabled=true;
          clearInterval(playPattern);
        }
        
     },tempo); 
  
  };
  
  function checkPlayerPattern() {
    
    for (var i=0;i<playerPattern.length;i++) {
      
      if(playerPattern[i]!==pattern[i]) {
        
        
        var audioError = new Audio("http://www.soundjay.com/button/beep-027.mp3");
        audioError.play();
          if(!strict) {
            playerPattern=[];
            buttonEnabled=false;
            playSequence();
          }
          else {
            pattern=[];
            playerPattern=[];
            pattern.push(Math.floor(Math.random()*4)+1);
            $(".level p").html(pattern.length);
            playSequence();
          }
        }
    }
    if(playerPattern.length==pattern.length) {
      pattern.push(Math.floor(Math.random()*4)+1);
      $(".level p").html(pattern.length);
      playerPattern=[];
      buttonEnabled=false;
      playSequence();
    }
    
    
  };
  
  
  
  
  $(".top-left").on("click",function() {
    if(power==1 && start && buttonEnabled) {
      
      playerPattern.push(1);
      
      $(".top-left").effect("highlight",100);
      var audio1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
      audio1.play();
      checkPlayerPattern();
    }
  });
  
  $(".top-right").on("click", function() {
    if (power==1 && start && buttonEnabled) {
      
      playerPattern.push(2);
     
      $(".top-right").effect("highlight",100);
      var audio2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
      audio2.play();
      checkPlayerPattern();
    }
  });
  
  $(".bottom-left").on("click", function() {
    
    if (power==1 && start && buttonEnabled) {
       
      playerPattern.push(3);
      
      $(".bottom-left").effect("highlight",100);
      var audio3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
      audio3.play();
      checkPlayerPattern();
    }
  });
  
  $(".bottom-right").on("click", function() {
    
    if (power==1 && start && buttonEnabled) {
       
      playerPattern.push(4);
    
      $(".bottom-right").effect("highlight",100);
      var audio4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
      audio4.play();  
      checkPlayerPattern();
    }
  });
  
  
  //Start game with start button..
   $(".start").on("click", function() {
     if (power==1) {
       start=true;
       pattern=[];
       playerPattern=[];
       pattern.push(Math.floor(Math.random()*4)+1);
       $(".level p").html(pattern.length);
       playSequence();
     }  
   });
                 
   $(".strict").on("click", function() {
     
     if (power==1) {
     if (!strict) {
       strict = true;
       $(".strictLight").css("background-color", "#14fc52");
     }
     else {
       strict=false;
        $(".strictLight").css("background-color", "#03601c")
     }
     }
   });               
   
$(".slider").on("click", function() {
  
          if(power===0) {
          power=1;
          $(".level p").html(power);
          }
          else {
            power=0;
            $(".level p").html("");
          }
});  
                   
                   
                   
                   
});