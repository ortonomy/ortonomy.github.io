/*
* ortonomy.co
* by Gregory J. Orton
* Twitter: @ortonomy_
* Github: ortonomy
*/

// Vendor scripts

AOS.init({});

// Accessible smooth link scrolling 
// polyfill provided by CSS Tricks:  https://css-tricks.com/snippets/jquery/smooth-scrolling/
// modified by @ortonomy to incorporate navigational changes

const linkChange = function (event) {
  if ( // On-page links
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
      let target = $(this.hash); // Figure out element to scroll to
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      const $this = $(this);
    
      if (target.length) { // Does a scroll target exist?
        event.preventDefault();  // Only prevent default if animation is actually gonna happen
        $('html, body').animate({ // animate the scroll
        scrollTop: target.offset().top
        }, 1000, () => { // Callback after animation

          // deal with navigational changes

          // remove active class from all
          $('a[href*="#"]')
          .not('[href="#"]') // remove non-linking links
          .not('[href="#0"]')
          .each( (i, el) => { // for each element
            $(el).find('li').first().removeClass('active'); // remove the active class
          })
      
          // add back necessary classes
          $this.find('li').first().addClass('active'); // add class back to the new element
          $this.siblings('.active-marker').css('top',`${$this[0].offsetTop}px`); // move the marker
          
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ( $target.is(":focus") ) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
        
      }
  }

}

$('a[href*="#"]')
.not('[href="#"]') // remove non-linking links
.not('[href="#0"]')
.click( linkChange );

const anchorScrollToView = function () {
  const element = this.element.id;
  const $link = $(`a[href="#${element}"]`);
  const $marker = $link.siblings('.active-marker');
  
  // remove active class from all
  $('a[href*="#"]')
  .not('[href="#"]') // remove non-linking links
  .not('[href="#0"]')
  .each( (i, el) => { // for each element
    $(el).find('li').first().removeClass('active'); // remove the active class
  })

  // add the active class back to scrolled to element
  $link.find('li').first().addClass('active');
  // move the marker
   $marker.css('top',`${$link[0].offsetTop}px`);

}

$('article#about').waypoint(anchorScrollToView);
$('article#portfolio').waypoint(anchorScrollToView);
$('article#experience').waypoint(anchorScrollToView);






