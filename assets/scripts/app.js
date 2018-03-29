/*
* ortonomy.co
* by Gregory J. Orton
* Twitter: @ortonomy_
* Github: ortonomy
*/

// Vendor scripts

AOS.init({});


// Custom behaviors

( () => {
  // big images
  const imageHolders = document.querySelectorAll('.portfolio-image');
  const images = document.querySelectorAll('.portfolio-real-image');
  const altText = document.querySelectorAll('.portfolio-image-popout');

  imageHolders.forEach ( (el, i) => {
    el.addEventListener('mouseenter', function imageHoverEnter(e) {
      altText[i].style.top = '0';
      altText[i].style.left = '0';
      altText[i].style.height = (el.offsetHeight - 4) + 'px';
      altText[i].style.width = el.offsetWidth + 'px';
      setTimeout ( () => (altText[i].innerHTML = `<p class="portfolio-image-popover-text"> ${images[i].getAttribute('alt')} </p>`), 300);
    }, false);

    el.addEventListener('mouseleave', function imageHoverLeave(e) {
      altText[i].innerHTML = '' ;
      altText[i].style.height = '0';
      altText[i].style.width = '0';
      altText[i].style.top = '50%';
      altText[i].style.left = '50%'; 
    });
  });

})()