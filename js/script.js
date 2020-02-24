$(document).ready(function(){
	$(".clickable-1").click(function(){
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
$(document).ready(function() {
    $("form").submit(function(event){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        if (name == "" || email == "") {
            alert("Cannot submit without name and email");
        } else {
            alert("Thank you " + name + " \n Message submitted successfully");
        }
    });
});
    
$(document).ready(function() {
    $("button").click(function(event){
    $(".message")[0].reset();
    });
    }); 

    