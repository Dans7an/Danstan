//Page Transition animation
window.onload = () => {
  const Transition_el = document.querySelector('.transition');
  const anchors = document.querySelector('a');

  setTimeout(() => {
    Transition_el.classList.remove('is-active');
  }, 500);

  for(let i = 0; i < anchors.length; i++){
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;

      Transition_el.classList.add('is-active');

      setTimeout(() => {
        window.location.href = target;
      }, 500);
    })
  }
}



$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
});



//Text animation
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  });

var textWrappers = document.querySelector('.ml3');
textWrappers.innerHTML = textWrappers.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  });

document.addEventListener('DOMContentLoaded',(
  anime({
    targets: '.navbar a',
    translateY: [-50,0],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: (el, i) => {
      return 1500 + 100 * i;
    },
    opacity: [0, 1],
  })
))
  // var textWrapper = document.querySelector('.ml10 .letters');
  // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  //
  // anime.timeline({loop: false})
  //   .add({
  //     targets: '.ml10 .letter',
  //     rotateY: [-90, 0],
  //     duration: 1300,
  //     delay: (el, i) => 45 * i
  //   });

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
});
