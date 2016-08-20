function generate(){
//$(".textbox").css("border","none");
$(".textbox").toggle();
var text = $("textarea").val();
if (text.length >= 10) {
    text = text.slice(0,9) + "<br>" + text.substring(9);
}
$(".render").html(text).removeClass("hidden");
html2canvas($("#container")).then(function(canvas) {
    var url = canvas.toDataURL();
    var img = $('img').attr('src', url);
    var newImg = document.createElement("img");
newImg.src = url; document.body.appendChild(newImg);
$("#container").hide();
});

}
$("textarea").val("");
$("textarea").bind("input", function(){
if($(this).val().length >= 5) {
    $(this).addClass("small");
    $(".render").addClass("small");
}
else {
    $(this).removeClass("small");
    $(".render").removeClass("small");
}

});
