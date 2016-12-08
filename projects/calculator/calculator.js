$(document).ready(function() {
  var power = "OFF";
  var input =[];
  var output= "";
  var decimalCounter=0;
  var equalsCounter=0;
  
  $(".button").disableSelection();
  
  $(".power").on("click",function() {
    power = "ON";
    output = "";
    input =[0];
    $(".topscreen").html("0");
    $(".bottomscreen").html("0");  
  });
  
  function numbers(num) {
    if(power=="ON") {                  
      if(equalsCounter>0) {
      $(".topscreen").html("0");
      $(".bottomscreen").html("0");  
      input =[0];
      output="";
      $(".bottomscreen").html("0");
      equalsCounter=0;
    } 
      
       if(input==0) {
        input.pop();
      }       
       if($(".topscreen").html()=="-"||$(".topscreen").html()=="/"||$(".topscreen").html()=="X"||$(".topscreen").html()=="+"||$(".topscreen").html()=="0") {
        $(".topscreen").html("");
      }   
      $(".topscreen").append(num);
      input.push(num);
     
       if(input.join("").length>=26) {
            $(".bottomscreen").html(input.slice(input.length-26).join(""));
          }
       else if(input.join("").length<26) {
           $(".bottomscreen").html(input);
       }               
      if(String($(".topscreen").html()).length>13) {
         $(".topscreen").html(String($(".topscreen").html()).slice(1,14));
      }
      
    }
  };
  
  function multiplications (operator) {
    if(power=="ON") {
      if(equalsCounter>0) {
        equalsCounter=0;
      }
      if($(".topscreen").html()=="-"||$(".topscreen").html()=="/"||$(".topscreen").html()=="x"||$(".topscreen").html()=="+") {
        input.pop();
      }    
      $(".topscreen").html(operator);
      if(operator=="*") {
        $(".topscreen").html("x");
      }
      input.push(operator);
       if(input.join("").length>=26) {
            $(".bottomscreen").html(input.slice(input.length-26).join(""));
          }
       else if(input.join("").length<26) {
           $(".bottomscreen").html(input);
       }                     
    }
  };
 
  $(".nine").on("click",function() {
   if(power=="ON") {
    numbers("9");
   }
  });
  $(".eight").on("click",function() {
    if(power=="ON") {
      numbers("8");
    }
  });
  $(".seven").on("click",function() {
    if(power=="ON") {
      numbers("7");
    }
  });
  $(".six").on("click",function() {
    if(power=="ON") {
    numbers("6");
    }
  });
  $(".five").on("click",function() {
    if(power=="ON") {
    numbers("5");
    }
  });
  $(".four").on("click",function() {
    if(power=="ON") {
    numbers("4");
    }
  });
  $(".three").on("click",function() {
    if(power=="ON") {
    numbers("3");
    }
  });
  $(".two").on("click",function() {
    if(power=="ON") {
    numbers("2");
    } 
  });
  $(".one").on("click",function() {
    if(power=="ON") {
    numbers("1");
    }
  });
  $(".zero").on("click",function() {
    if(power=="ON") {
    numbers("0");
    } 
  });
  $(".point").on("click",function() {
    if(equalsCounter>0) {
      $(".topscreen").html("0");
      $(".bottomscreen").html("0");  
      input =[0];
      output="";
      $(".bottomscreen").html("0");
      equalsCounter=0;
    }
    if(power=="ON"&&decimalCounter===0) {
      $(".topscreen").append(".");
      input.push(".");
       if(input.join("").length>=26) {
            $(".bottomscreen").html(input.slice(input.length-26).join(""));
          }
       else if(input.join("").length<26) {
           $(".bottomscreen").html(input);
       }               
      if(String($(".topscreen").html()).length>13) {
         $(".topscreen").html(String($(".topscreen").html()).slice(1,14));
      }
      decimalCounter++;
    }
  });
  $(".plus").on("click",function() {
    multiplications("+");
    decimalCounter=0;
  });
  $(".minus").on("click",function() {
    multiplications("-");
    decimalCounter=0;
  });
  $(".times").on("click",function() {
    multiplications("*");
    decimalCounter=0;
  });
  $(".divide").on("click",function() {
    multiplications("/");
    decimalCounter=0;
  });
  $(".equals").on("click",function() {
    if(power=="ON") {
      
      output = input.join("");
      output=eval(output);
      
       
      if (String(output).length>13) {
        if(String(output).indexOf("e")) {
           var extra = String(output).slice(String(output).indexOf("e"));
        }
        output = String(output).slice(0,7) + extra;
      }       
        
          
      $(".topscreen").html(output);
      $(".bottomscreen").html("="+output);
      input=[];
      input.push(eval(output));
    }
    decimalCounter=0;
    equalsCounter++;
  });
  $(".clear").on("click",function() {
    if(power=="ON") {
      $(".topscreen").html("0");
      $(".bottomscreen").html("0");  
      input =[0];
      output="";
      $(".bottomscreen").html("0");
    }
    decimalCounter=0;
  });  
    
  
});
