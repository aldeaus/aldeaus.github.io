$(document).ready(function() {
    
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth()+1;
var day = today.getDate();

if(month<10) { 
    month = "0"+ (month);
}

if(day<10) {
    day = "0" + day;
}

today = year+"-"+month+"-"+day;

$(".neoHeader").html("Near Earth Objects "+today);
    
var picUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
var neoUrl = "https://api.nasa.gov/neo/rest/v1/feed?start_date="+today+"&api_key=DEMO_KEY";    
        
    $.getJSON(picUrl,function(data) { //call picture of the day api..
       
      $("body").css("background-image", "url("+data.hdurl+")");    
      $(".imgName").html("Background Image: "+data.title);
      $(".caption").html(data.explanation);
      if(data.caption) {
        $(".caption").append("</br></br>Image Copyright: "+data.copyright);
      }
      else {
        $(".caption").append("</br></br>Image Copyright: Public");  
      }    
    });
   
    $.getJSON(neoUrl,function(data) { //call neo feed api...
      
        
      data.near_earth_objects[today].forEach(function(neo) {
        
        $(".neoInfoPanel").append('<div class="neoObject"><div class="neoName">'+neo.name+'</div><div class="neoData">The estimated diameter is between ' +Math.round(neo.estimated_diameter.meters.estimated_diameter_min)+' and '+Math.round(neo.estimated_diameter.meters.estimated_diameter_max)+' meters.</br>It will pass Earth by a distance of '+Math.round(neo.close_approach_data[0].miss_distance.kilometers)+' kilometers, and it will have a velocity of '+Math.round(neo.close_approach_data[0].relative_velocity.kilometers_per_hour)+' kilometers/hour.</br></div></div>'
        );    
      });
   });
    
   
    
});