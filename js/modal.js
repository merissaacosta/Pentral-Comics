// Click function for show the Modal
$(".show").on("click", function(){
    $(this).next(".mask").addClass("active");
});

// Function for close the Modal
function closeModal(){
    $(".mask").removeClass("active");
}

// Call the closeModal function on click
$(".close, .mask").on("click", function(){
    closeModal();
});
