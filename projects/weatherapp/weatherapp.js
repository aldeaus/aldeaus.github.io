$(document).ready(function() {
  
  navigator.geolocation.getCurrentPosition(function(position) {
    
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon=' + position.coords.longitude     +'&units=metric&APPID=2141aaf5ed67fb041395fafc54cf37fe',function(data) {
          
      $(".location").html(data.name +" "+ data.sys.country);
      $(".tempval").html(Math.floor(data.main.temp)+" C");
      $(".outside").html(data.weather[0].main);
      
      switch (data.weather[0].description) {
        case "clear sky":
        $("body").addClass("clear");
        break;
        
        case "few clouds":
        case "scattered clouds":
        case "broken clouds":
        $("body").addClass("clouds");
        break;
        
        case "shower rain":
        case "rain":
        $("body").addClass("rain");
        break;
        
        case "thunderstorm":
         $("body").addClass("thunderstorm"); 
        break;
        
        case "snow":
         $("body").addClass("snow"); 
        break;
          
        case "mist":
         $("body").addClass("mist"); 
        break;
        }
      
      $(".tempbut").on("click", function() {
      switch ($("i").attr("class")) {
        case "F":
        $("i").attr("class", "C");
        $("i").html("C");
        $(".tempval").html(Math.floor(data.main.temp)+ " C");
        break;
        
        case "C":
        $("i").attr("class", "F");
        $("i").html("F");
          $(".tempval").html(Math.floor((data.main.temp*1.8)+32)+" F");
        break;
      }
      });
    });
  });   
});