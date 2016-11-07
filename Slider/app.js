document.addEventListener("DOMContentLoaded", function(){
   
//    console.log("jquery podpięty");
    
    $("#slideshow > div:gt(0)").hide();
    
    setInterval(function interval() {
     $("#slideshow > div:first")
     .fadeOut(1000)
     .next()
     .fadeIn(1000)
     .end()
     .appendTo("#slideshow");
    },3000);
    
});