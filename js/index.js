$(document).ready(function() {

    $(".home").disableSelection();
    
    
    $(".home").on("click", function() {
       $(".resume").html("This will show 'home' contents"); 
    });
    
    $(".projects").on("click", function() {
       $(".resume").html("This will show projects contents"); 
    });
    $(".about").on("click", function() {
       $(".resume").html("This will show info about me.."); 
    });

});