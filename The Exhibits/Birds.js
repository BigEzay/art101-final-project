
$("#Macaw").click(function() {

    let randomLeft = Math.floor(Math.random() * 75) + 5;
    let randomBottom = Math.floor(Math.random() * 150) + 40;

    $(this).css({
        "left": randomLeft + "%",
        "bottom": randomBottom + "px"
    });

    $("#message").text(
        "The little bunny is exploring somewhere new!"
    );

});