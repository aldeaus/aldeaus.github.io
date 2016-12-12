$(document).ready(function() {
  var frases ={
    '1':"Tu idea es una locura hasta que triunfa",
    '2':"Una mentira en dos palabras 'No puedo' - Joaquín Sabina",
    '3':"La envidia es una declaración de inferioridad - Napoleón Bonaparte",
    '4':"El amor y la felicidad no se publican, se viven",
    '5':"Soy responsable de lo que digo, no de lo que tú crees que digo... Oreja, también llamada distorisiondora de la realidad",
    '6':"Pensamos que nuestro camíno a la meta será sin obstáculos, pero la realidad es que va a estar lleno de obstáculos",
    '7':"Trabaja hasta que tus ídolos se conviertan en tus rivales",
    '8':"Ver a alguien leyendo un libro que te gusta es ver a un libro recomentdándote a un persona",
    '9':"Los grandes logros son sueños que jamás díste por vencidos",
    '10':"La única discapacidad en la vida es la mala actitud",
    '11':"El mundo necesita gente que ame lo que hace",
    '12':"En el momento en que dejas de preocuparte por lo que va a pasar,  empiezas a disfrutar de lo quq está pasando",
    '13':"La vida es muy peligrosa. No por las personas que hacen el mal, sino por las que se sientan a ver lo que pasa - Albert Einstein",
    '14':"Al final, lo que importa no son los años de vida, sino la vida de los años - Abraham Lincoln",
    '15':"La vida es aquello que te va sucediendo mientras te empeñas en hacer otros planes - John Lennon",
    '16':"Lo menos frecuente en este mundo es vivir. La mayoría de la gente existe, eso es todo - Oscar Wilde",
    '17':"¿Me preguntas por qué compro arroz y flores? Compro arroz para vivir y flores para tener algo por lo que vivir - Confucio",
    '18':"Aquel que tiene un porqué para vivir se puede enfrentar a todos los \"cómos\" - Friedrich Nietzsche",
    '19':"Todo el mundo trata de realizar algo grande, sin darse cuenta de que la vida se compone de cosas pequeñas - Frank A. Clark",
    '20':"La vida consiste no en tener buenas cartas, sino en jugar bien las que uno tiene - Josh Billings",
    '21':"Si no vives peligrosamente, no vives. La vida sólo florece en el peligro. La vida nunca florece en la seguridad. (… ) Cuando todo está yendo a la perfección, fíjate, te estás muriendo y no pasa nada -Osho"
  };
 
 $(".tweet,.newfrase").fadeIn(2000);
 $(".textbox").html(frases[1]);      
  
  $(".newfrase").on("click", function() {
    
   var i = 1;
   var posx = 0;
   var posy = 0;
    $(".quotebox").fadeOut(2000);
   
    $.when( $(".quotebox").fadeOut(2000) ).then( function() {
  
    $(".textbox").css("height", "auto");  
   i = Math.floor(Math.random()*21);
    $(".textbox").html(frases[i]);
    $("a").attr("href", "https://twitter.com/intent/tweet?text=\""+ frases[i]+"\"");
    
    posx = Math.floor(Math.random()*60);
    posy = Math.floor(Math.random()*70);
    
    $(".quotebox").css("margin-top", posy+"vh");
    $(".quotebox").css("margin-left", posx+"vw");
    $(".quotebox").fadeIn(2000);
    });
   
    
  });
});