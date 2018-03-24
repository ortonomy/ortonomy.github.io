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
 
  // x 3 image rows
  const imageHolders23 = document.querySelectorAll('.portfolio-image_2by3 > a');
  const altText23 = document.querySelectorAll('.portfolio-image-popout_2by3');

  // imageHolders23.forEach ( (el, i) => {
  //   el.addEventListener('mouseenter', function images23HoverEnter(e) {
  //     altText23[i].style.height = e.target.offsetHeight + 'px';
  //     altText23[i].style.width = e.target.offsetWidth + 'px';
  //   });
  // })
  // const images23 = document.querySelectorAll('.portfolio-real-image_2by3');
  // const altText23 = document.querySelectorAll('.portfolio-image-popout_2by3');

  // imageHolders23.forEach ( (el, i) => {
  //   el.addEventListener('mouseenter', function image23HoverEnter(e) {
  //     altText23[i].style.top = '0'
  //     altText23[i].style.left = '-' + (el.offsetWidth) + 'px';
  //     altText23[i].style.height = el.offsetHeight + 'px';
  //     altText23[i].style.width = el.offsetWidth + 'px';
  //     setTimeout ( () => (altText23[i].innerHTML = `<p class="portfolio-image-popover-text"> ${images23[i].getAttribute('alt')} </p>`), 300);
  //   }, false);

  //   el.addEventListener('mouseleave', function image23HoverLeave(e) {
  //     altText23[i].innerHTML = '' ;
  //     altText23[i].style.height = '0';
  //     altText23[i].style.width = '0';
  //     altText23[i].style.top = '50%';
  //     altText23[i].style.left = '50%'; 
  //   });
  // });

  // smaller images

})()