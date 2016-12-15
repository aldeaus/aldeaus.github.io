$(document).ready(function() {

$(".searchButton").on("click",function() {
    
    var url="https://www.omdbapi.com/?&plot=full&tomatoes=true&t="+$(".searchField").val()+"&callback=?"
    $.getJSON(url,function(data) {
       $(".result").html('<div class="title">'+data.Title+'</div><div class="poster"><a class="weblink" href="#" target="_blank"><img src="'+data.Poster+'"/></a></div><div class="info">'+data.Plot+'</br></br>Director: '+data.Director+'</br>Actors: '+data.Actors+'</div><div class="facts"><div class="misc"><h3>Facts</h3>Genre: '+data.Genre+'</br>Country: '+data.Country+'</br>Awards: '+data.Awards+'</div><div class="ratings"><h3>Ratings</h3>Imdb rating: '+data.imdbRating+'</br>Tomato rating: '+data.tomatoRating+'</br>Tomato user rating: '+data.tomatoUserRating+'</div>');
    
    if(data.Website) {
        $(".weblink").attr("href", data.Website)
    }
    
    });
});


$(".searchField").on("keypress",function(event) {
    if(event.which ==13) {
        var url="https://www.omdbapi.com/?&plot=full&tomatoes=true&t="+$(".searchField").val()+"&callback=?"
    $.getJSON(url,function(data) {
       $(".result").html('<div class="title">'+data.Title+'</div><div class="poster"><a class="weblink" href="#" target="_blank"><img src="'+data.Poster+'"/></a></div><div class="info">'+data.Plot+'</br></br>Director: '+data.Director+'</br>Actors: '+data.Actors+'</div><div class="facts"><div class="misc"><h3>Facts</h3>Genre: '+data.Genre+'</br>Country: '+data.Country+'</br>Awards: '+data.Awards+'</div><div class="ratings"><h3>Ratings</h3>Imdb rating: '+data.imdbRating+'</br>Tomato rating: '+data.tomatoRating+'</br>Tomato user rating: '+data.tomatoUserRating+'</div>');
    
    if(data.Website) {
        $(".weblink").attr("href", data.Website)
    }
    $(".searchField").val("");
    });
    }
    
});
});