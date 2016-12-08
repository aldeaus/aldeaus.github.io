$(document).ready(function() {
  var board = [["","",""],["","",""],["","",""]];  
  var AI = "", player = "";
  var AIWins=0,playerWins=0,draws=0;
 
  
  //function to create tic tac toe board on screen...
  function drawBoard(board) {
   var cellId = 1;
    for(var row=0;row<3;row++) {  
      for(var col=0;col<3;col++) { 
        if(board[row][col]=="") { //if cell contains nothing fill with nothing..
          $("#"+cellId).html("");
          cellId++;
        }        
        else {          
          $("#"+cellId).html(board[row][col]);
          cellId++;
        }                   
      }
    }
  };
  
   //checks how many turns are left on board..
  function playsLeft(board) {
    remainingPlays=0;
    
    for (var row=0;row<3;row++) {
      for (var col=0;col<3;col++) {
        if(board[row][col]=="") {
          remainingPlays++;
        }
      } 
    }
    return remainingPlays; //returns number of turns left..
  };

  
    //function to check possible winning combinations...
function checkForWinner(board) {
   //check all rows for win..
  for (var row = 0 ; row<3 ; row++) {
    if((board[row][0] == board[row][1] && board[row][1] == board[row][2]) && board[row][0]!=="" ) { 
      if(board[row][0]== AI) {
        return +10;
      }
      else {
        return -10;
      }
    }
  }
  //check all columns for win..
  for(var col=0; col<3; col++) {
    if((board[0][col] == board[1][col] && board[1][col] == board[2][col]) && board[0][col]!=="") {
      if(board[0][col]== AI) {
        return +10;
      }
      else {
        return -10;
      }
    }    
  }
  //check diagonals for win;
  if(board[0][0]==board[1][1] && board[1][1] == board[2][2] && board[0][0]!=="") {
    if(board[0][0]== AI) {
      return +10;
    }
    else {
        return -10;
      }
    
  }
  if(board[0][2]==board[1][1] && board[1][1] == board[2][0]&&board[0][2]!=="") {
    if(board[0][2]== AI) {
      return +10;
    }
    else { 
      return -10;
    }
    
  }
  //if there are no winners.. draw..
  if(playsLeft(board)===0) {
    return 0;
  }
};
  
  
 
    
  function AIMove() {
  //1.Win
    //see if AI has two in a row and if so place in 3rd..
    
    //check row for two in a sequence horizontally..
    for (var row=0;row<3;row++) {
      if((board[row][0]==board[row][1]&&board[row][0]==AI)||(board[row][1]==board[row][2]&&board[row][1]==AI)||(board[row][0]==board[row][2]&&board[row][0]==AI)) {
        for(var col=0;col<3;col++) {
          if(board[row][col]=="") {
            board[row][col]=AI;
            return;
          }
        }
      }
    }
    
     //check for two in a sequence vertically..
    for (var col=0;col<3;col++) {
        if((board[0][col]==board[1][col]&&board[0][col]==AI)||(board[1][col]==board[2][col]&&board[1][col]==AI)||(board[0][col]==board[2][col]&&board[0][col]==AI)) {
            for (var row=0;row<3;row++) {
                if(board[row][col]=="") {
                    board[row][col]=AI;
                    return;
                }
            }
        }
    }
    
    
    //check for two in a sequence diagonally..
    
    if((board[0][0]==board[1][1]&&board[0][0]==AI)||(board[1][1]==board[2][2]&&board[1][1]==AI)||(board[0][0]==board[2][2]&&board[0][0]==AI)) {
      if(board[0][0]==""){
        board[0][0]=AI;
        return;
      }
      else if(board[1][1]==""){
        board[1][1]=AI;
        return;
      }
      else if(board[2][2]==""){
        board[2][2]=AI;
        return;
      }
      else {
        
      }
    }
    
    // check for two in a sequence backwards diagonally..
    
    if((board[0][2]==board[1][1]&&board[0][2]==AI)||(board[1][1]==board[2][0]&&board[1][1]==AI)||(board[0][2]==board[2][0]&&board[0][2]==AI)) {
      if(board[0][2]==""){
        board[0][2]=AI;
        return;
      }
      else if(board[1][1]==""){
        board[1][1]=AI;
        return;
      }
      else if(board[2][0]==""){
        board[2][0]=AI;
        return;
      }
      else {
        
      }
    }
   //2.Block
    //check for 2 in a row if so make block
    //check row for two in a sequence horizontally..
    for (var row=0;row<3;row++) {
      if((board[row][0]==board[row][1]&&board[row][0]==player)||(board[row][1]==board[row][2]&&board[row][1]==player)||(board[row][0]==board[row][2]&&board[row][0]==player)) {
        for(var col=0;col<3;col++) {
          if(board[row][col]=="") {
            board[row][col]=AI;
            return;
          }
        }
      }
    }
    
    //check for two in a sequence vertically..
    for (var col=0;col<3;col++) {
        if((board[0][col]==board[1][col]&&board[0][col]==player)||(board[1][col]==board[2][col]&&board[1][col]==player)||(board[0][col]==board[2][col]&&board[0][col]==player)) {
            for (var row=0;row<3;row++) {
                if(board[row][col]=="") {
                    board[row][col]=AI;
                    return;
                }
            }
        }
    }
    
    
    //check for two in a sequence diagonally..
    
    if((board[0][0]==board[1][1]&&board[0][0]==player)||(board[1][1]==board[2][2]&&board[1][1]==player)||(board[0][0]==board[2][2]&&board[0][0]==player)) {
      if(board[0][0]==""){
        board[0][0]=AI;
        return;
      }
      else if(board[1][1]==""){
        board[1][1]=AI;
        return;
      }
      else if(board[2][2]==""){
        board[2][2]=AI;
        return;
      }
      else {
        
      }
    }
    
    // check for two in a sequence backwards diagonally..
    
    if((board[0][2]==board[1][1]&&board[0][2]==player)||(board[1][1]==board[2][0]&&board[1][1]==player)||(board[0][2]==board[2][0]&&board[0][2]==player)) {
      if(board[0][2]==""){
        board[0][2]=AI;
        return;
      }
      else if(board[1][1]==""){
        board[1][1]=AI;
        return;
      }
      else if(board[2][0]==""){
        board[2][0]=AI;
        return;
      }
      else {
        
      }
    } 
    //3.Fork    
  //4.Block Fork
    if((board[0][0]==board[2][2]&&board[1][1]==AI&&board[0][0]==player)||(board[0][2]==board[2][0]&&board[1][1]==AI&&board[0][2]==player)) {
        if(board[0][1]=="") {
      board[0][1]=AI;
      return;
    }
    else if(board[1][0]=="") {
      board[1][0]=AI;
      return;    
    }
    else if (board[1][2]=="") {
      board[1][0]=AI;
      return;    
    }
    else if (board[2][1]=="") {
      board[2][1]=AI;
      return;    
    }
    else {
        
    }
    }
  //5.Center
    //check if center is available and if so take it..
    if(board[1][1]=="") {
        board[1][1]=AI;
        return;
    }
    else {
        
    }
  //6. opposite corner
    if(board[0][0]==AI && board[2][2]=="") {
      board[2][2]=AI;
      return;
    }
    else if (board[0][2]==AI && board[2][0]=="") {
      board[2][0]=AI;
      return;
    }
    else if (board[2][0]==AI && board[0][2]=="") {
      board[0][2]=AI;
      return;
    }
    else if (board[2][2]==AI && board[0][0]=="") {
      board[0][0]=AI;
      return;    
    }
    else {
        
    }
    
  //7. Empty corner   
    //check if any corners are available and if so, take one.
    if (board[0][0]=="") {
      board[0][0]=AI;
      return;
    }
    else if (board[0][2]=="") {
      board[0][2]=AI;
      return;
    }
    else if (board[2][0]=="") {
      board[2][0]=AI;
      return;
    }
    else if (board[2][2]=="") {
      board[2][2]=AI;
      return;
    }
    else {
    }
  //8. empty side   
    //check if any middle spaces on edges are availble and if so take one..
    if(board[0][1]=="") {
      board[0][1]=AI;
      return;
    }
    else if(board[1][0]=="") {
      board[1][0]=AI;
      return;    
    }
    else if (board[1][2]=="") {
      board[1][0]=AI;
      return;    
    }
    else if (board[2][1]=="") {
      board[2][1]=AI;
      return;    
    }
    else {
      return;
    }
    
  };
  
 function runGame(board) {
    drawBoard(board);
    // check if player wins..
    if(checkForWinner(board)==-10) {
      //call function to automatically restart after certain time..
      playerWins++;
      $(".playerScore .score").html(playerWins);
      $(".gameMessage p").html("You Win!");
      $(".gameMessage").show();
      $(".gameMessage").fadeOut(3000);
      
    }
    
    //check if moves left..
    else if(playsLeft(board)>0) {
    
    
      
    //make move  
   
    AIMove();
   
    drawBoard(board);
   
    //check if AI wins..
    if(checkForWinner(board)==10) {
      //call function to automatically restart after certain time..
      AIWins++;
      $(".AIScore .score").html(AIWins);
      $(".gameMessage p").html("You Lose!");
      $(".gameMessage").show();
      $(".gameMessage").fadeOut(3000);     
    }
   
    
    }
   else {
     draws++;
     $(".drawsCount .score").html(draws);
     $(".gameMessage p").html("Draw!");
     $(".gameMessage").show();
     $(".gameMessage").fadeOut(3000);    
   }
  };
  
  function resetCheck() {
     if(checkForWinner(board)==-10||checkForWinner(board)==10||checkForWinner(board)==0) {
     setTimeout(function() {
       board = [["","",""],["","",""],["","",""]];  
       drawBoard(board);
     },3000);
   }
  };
  
  
  $("#1").on("click",function() {
     if(playsLeft(board)>0 && checkForWinner(board)!==-10 && checkForWinner(board)!==10 && board[0][0]=="") {
    board[0][0]=player;
    runGame(board);
    }
    resetCheck();
  });
  
  $("#2").on("click",function() {
  if(playsLeft(board)>0 && checkForWinner(board)!==-10 && checkForWinner(board)!==10&& board[0][1]=="") {
    board[0][1]=player;
    runGame(board);
    
    }
  resetCheck();
  });
  
  $("#3").on("click",function() {
      if(playsLeft(board)>0 && checkForWinner(board)!==-10 && checkForWinner(board)!==10 && board[0][2]=="") {
    board[0][2]=player;
    runGame(board);
    }
    resetCheck();
  });
  
  $("#4").on("click",function() {
     if(playsLeft(board)>0 && checkForWinner(board)!==-10 && checkForWinner(board)!==10 && board[1][0]=="") {
    board[1][0]=player;
    runGame(board);
    }
    resetCheck();
  });
  
  $("#5").on("click",function() {
      if(playsLeft(board)>0 && checkForWinner(board)!==-10 && checkForWinner(board)!==10 && board[1][1]=="") {
    board[1][1]=player;
    runGame(board);
    }
    resetCheck();
  });
  
  $("#6").on("click",function() {
     if(playsLeft(board)>0 && checkForWinner(board)!==-10 && checkForWinner(board)!==10 && board[1][2]=="") {
    board[1][2]=player;
    runGame(board);
    }
    resetCheck();
  });
  
  $("#7").on("click",function() {
    if(playsLeft(board)>0 && checkForWinner(board)!==-10 && checkForWinner(board)!==10 && board[2][0]=="") {
    board[2][0]=player;
    runGame(board);
    }
    resetCheck();
  });
  
  $("#8").on("click",function() {
     if(playsLeft(board)>0 && checkForWinner(board)!==-10 && checkForWinner(board)!==10 && board[2][1]=="") {
    board[2][1]=player;
    runGame(board);
    }
    resetCheck();
  });
  
  $("#9").on("click",function() {
    if(playsLeft(board)>0 && checkForWinner(board)!==-10 && checkForWinner(board)!==10 && board[2][2]=="") {
    board[2][2]=player;
    runGame(board);
    }
    resetCheck();
  });
  
  $(".sideX").on("click",function() {
    player="X";
    AI="O";
    $(".chooseSide").fadeOut(1000);
  });
  
  $(".sideO").on("click",function() {
    player="O";
    AI="X";
    $(".chooseSide").fadeOut(1000); 
  });
  
  $(".reset").on("click",function() {
    board = [["","",""],["","",""],["","",""]];  
    AIWins=0;
    playerWins=0;
    draws=0;
    $(".playerScore .score").html("0");
    $(".AIScore .score").html("0");
    $(".drawsCount .score").html("0");
    AI="";
    player="";
    drawBoard(board);
    $(".chooseSide").fadeIn(2000);
  });
  
  drawBoard(board);
  $(".chooseSide").fadeIn(2000);
   
});