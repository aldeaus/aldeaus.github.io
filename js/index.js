$(document).ready(function() {

     
    $(".home").on("click", function() {
       $(".resume").html("This will show 'home' contents"); 
    });
    
    $(".projects").on("click", function() {
       $(".resume").load("projects.htm")
    });
    $(".about").on("click", function() {
       $(".resume").html("This will show info about me.."); 
    });

});