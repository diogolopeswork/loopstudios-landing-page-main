$(function() {
    $(document).on("click", "#hamburger", function(e) {
        $("#hamburger").hide();
        $("#c-hamburger").show();
        $("#nav").addClass("active");
        $("active").show();
    }); 

    $(document).on("click", "#c-hamburger", function(e) {
        $("#hamburger").show();
        $("#c-hamburger").hide();
        $("#nav").removeClass("active");
        $("active").hide();
    });
});

