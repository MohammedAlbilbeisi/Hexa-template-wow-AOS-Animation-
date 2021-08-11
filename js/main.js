$(function () {
$('.nav-bar a').click(function () {
$('html , body').animate({
scrollTop: $('#' + $(this).data('value')).offset().top
}, 2500);

});
console.log($('.SectionThree_header').offset());
});



if ($(window).width() > 466) {

$("html").niceScroll({
cursorcolor: "black",
cursorwidth: "14px",
horizrailenabled: false,
scrollspeed: 77,
mousescrollstep: 40
});

}
if ($(window).width() < 1300) {
document.getElementById("An-img").style.display = "none";
document.getElementById("Searchlight").style.display = "none";
document.getElementById("Harrasment-img").style.display = "none";
document.getElementById("spotUnder").style.display = "none";

}









$(document).ready(function(){
$('.floatingButton').on('click',
    function(e){
        e.preventDefault();
        $(this).toggleClass('open');
        if($(this).children('.fa').hasClass('fa-plus'))
        {
            $(this).children('.fa').removeClass('fa-plus');
            $(this).children('.fa').addClass('fa-close');
        } 
        else if ($(this).children('.fa').hasClass('fa-close')) 
        {
            $(this).children('.fa').removeClass('fa-close');
            $(this).children('.fa').addClass('fa-plus');
        }
        $('.floatingMenu').stop().slideToggle();
    }
);
$(this).on('click', function(e) {
    var container = $(".floatingButton");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && $('.floatingButtonWrap').has(e.target).length === 0) 
    {
        if(container.hasClass('open'))
        {
            container.removeClass('open');
        }
        if (container.children('.fa').hasClass('fa-close')) 
        {
            container.children('.fa').removeClass('fa-close');
            container.children('.fa').addClass('fa-plus');
        }
        $('.floatingMenu').hide();
    }
});
});















// ************************************Fancy "Back To Top" FAB(Float Action Button)
// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function () {
  if ($(window).scrollTop() > amountScrolled) {
    $("button.back-to-top").addClass("show");
  } else {
    $("button.back-to-top").removeClass("show");
  }
});

$("button.back-to-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    800
  );
  return false;
});

// Ignore this
// This is just for content manipulation
var skeleton =
  '<div class="skeleton"><div class="skeleton-wrapper"><div class="skeleton-wrapper-inner"><div class="skeleton-wrapper-body"><div class="skeleton-avatar"></div><div class="skeleton-author"></div><div class="skeleton-label"></div><div class="skeleton-content-1"></div><div class="skeleton-content-2"></div><div class="skeleton-content-3"></div></div></div></div></div>';
for (var i = 0; i < 10; i++) {
  $("#content").append(skeleton);
}
// Add waves effect
Waves.attach("button.back-to-top", "waves-effect");
Waves.init();
// ************************************Fancy "Back To Top" FAB(Float Action Button)

