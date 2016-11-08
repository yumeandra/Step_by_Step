document.addEventListener("DOMContentLoaded", function(){
//    console.log("It works!");
    
    //checkbox is chacked -> slider slides automatically
    $("#checkbox").change(function(){
       
        setInterval(function(){ moveRight()}, 3000);
    });
    
    
    //variables for moving the slides right and left
    var slideCount = $("#slider ul li").length;
    var slideWidth = $("#slider ul li").width();
    var slideHeight = $("#slider ul li").height();
    var slideUlWidth = slideCount * slideWidth;
    
    //taking width and height of the slides
    $("#slider").css({width: slideWidth, height: slideHeight});
    $("#slider ul").css({width: slideWidth, marginLeft: -slideWidth});
    $("#slider ul li:last-child").prependTo("#slider ul");
    
    //moving the slides to the left (for control_prev)
    function moveLeft() {
        $("#slider ul").animate({
            left: +slideWidth}, 300, function(){
            $("#slider ul li:last-child").prependTo("#slider ul");
            $("#slider ul").css("left", "");
        
        });
    };
    
    moveLeft();
    
    //moving the slides to the right (for next_control)
    function moveRight(){
//        console.log("moveRight");
        $("#slider ul").animate({
            left: -slideWidth}, 300, function(){
            $("#slider ul li:first-child").appendTo("#slider ul");
            $("#slider ul").css("left", "");
        
        });
        
    };
    
    moveRight();
    
    //functions moving the slides connected to controls
    $("a.control_prev").click(function(){moveLeft();});
    $("a.control_next").click(function(){moveRight();});
    
});