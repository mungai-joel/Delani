$(document).ready(function() {
    $(".clickable-1").click(function() {
    $(".hide-design").toggle();
    });
    });
    
$(document).ready(function() {
    $(".clickable-2").click(function() {
    $(".hide-development").toggle();
    });
    });
    
$(document).ready(function() {
    $(".clickable-3").click(function() {
    $(".hide-product").toggle();
    });
    });
    
$(document).ready(function(){
    $("form").submit(function(event){
    var name = $("input#name").val();
    alert(name + " " + "we have received your message. Thank you for reaching out to us.");;
    });
    });
    
$(document).ready(function() {
    $("button").click(function(event){
    $(".message")[0].reset();
    });
    }); 
    