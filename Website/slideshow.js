var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
 showDivs(slideIndex += n);
}

function currentDiv(n) {
 showDivs(slideIndex = n);
}

function showDivs(n)
{
 var i;
 var x = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("demo");
 if (n > x.length) {slideIndex = 1}
 if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";  
 }
 for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
   }
 x[slideIndex-1].style.display = "block";  
 dots[slideIndex-1].className += " w3-white";
  }

  //bg changer
  $(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();
