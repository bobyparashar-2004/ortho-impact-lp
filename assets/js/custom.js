let navHeight = $("header").height() - 50;
$(window).bind("scroll", function() {
    if ($(window).scrollTop() > navHeight) {
        $("#menuHeader").addClass("sticky-header");
    } else {
        $("#menuHeader").removeClass("sticky-header");
    }
});

$(".anchor-menu").click(function() {
    $(".menu-button").click();
});

$(".menu-button").click(function() {
    $(".mobileOverlay").toggleClass("toggle");
    $(".mobile_primary").toggleClass("active");
    $(".menu-button").toggleClass("toggle");
});

$(".mobileOverlay").click(function() {
    $(".mobileOverlay").toggleClass("toggle");
    $(".mobile_primary").toggleClass("active");
    $(".menu-button").toggleClass("toggle");
});

$(".menuClose").click(function() {
    $(".mobileOverlay").toggleClass("toggle");
    $(".mobile_primary").toggleClass("active");
    $(".menuClose").toggleClass("toggle");
    $(".menu-button").toggleClass("toggle");
});

function showmodal(element) {
    let title = $(element).parents(".condition-box").find("h5").html();
    console.log(title);

    let content = $(element).parents(".card-body").find(".show-area").html();

    $("#myModal").find(".modal-title").html(title);
    $("#myModal")
        .find(".modal-body")
        .html("<div>" + content + "</div>")
        .addClass("show-details");
    $("#myModal").modal("show");
}