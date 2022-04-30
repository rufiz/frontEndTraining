let makeYellowButton = $(".make-yellow");
let makeBlackButton = $(".make-black");

function makeYellow(event) {
    $("h1").addClass("big-title");
}

function makeBlack(event) {
    $("h1").removeClass("big-title");
}

$("button.make-yellow").on("click", makeYellow);
$("button.make-black").on("click", makeBlack);