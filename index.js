// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }
//
// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
// }
//
// function allowDrop(ev) {
//   ev.preventDefault();
// }
//
//
//
// const square_body = document.querySelector('#body')
// document.querySelector('#display').addEventListener('click', () => {
//   if(square_body.childElementCount == 4) {
//     square_body.classList.toggle('effect-square-body');
//   }
// })


// animation

// gsap.from('#green', {
//   duration : 3,
//   x: -500,
//   backgroundColor: "yellow",
//   borderRadius: "20%",
//   border: "2px solid black",
//   scale: 1.3,
//   ease: "back"
// })
//
//
// gsap.from('#blue', {
//   duration: 2,
//   rotation: 360,
//   scale: 0.3,
//   ease : 'back'
// })
let tl = gsap.timeline({
  repeat : 10,
  yoyo : true,
})

tl.from('.circle', {
  duration: 1,
  opacity: 0,
  y: 'random(-200, 200)',
  x: 'random(-300, 300)',
  rotation: 360,
  stagger: 0.25
})

tl.to('.circle', {
  duration: 0.5,
  opacity: 0,
  x: 'random(-300, 300)',
  ease: 'power3.out',
},
'circlesOutro')
