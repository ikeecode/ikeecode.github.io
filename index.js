let main = document.querySelector('article.main')
let articles = document.querySelectorAll('article.x')
let resources = document.querySelector('#resources')
let github = document.querySelector('#github')
let sociallife = document.querySelector('#sociallife')
let hobbies = document.querySelector('#hobbies')
let submain = document.querySelector('#submain')
let displayPresentation = document.querySelector('article.displayPresentation')



colors = {
  resources: "rgba(0, 90, 158, 1)",
  github : "rgba(45, 51, 59, 1)",
  sociallife: "rgba(125, 226, 209, 1)",
  hobbies: "rgba(255, 255, 255, 1)"
}

main.addEventListener('click', (e)=>{
  articles.forEach((item, i) => {
    item.classList.toggle('hidden')
  })

  resources.classList.toggle('resources')
  github.classList.toggle('github')
  sociallife.classList.toggle('sociallife')
  hobbies.classList.toggle('hobbies')

})



// main.addEventListener('mouseover', (e)=>{
//   main.classList.add('presentation')
//   main.querySelector('h1').classList.add('moveH1')
// })
//
// main.addEventListener('mouseout', (e)=>{
//   main.classList.remove('presentation')
//   main.querySelector('h1').classList.remove('moveH1')
//
// })


// resources.addEventListener('click', (e)=>{
//   resources.classList.toggle('isSrinked')
//   // resources.classList.toggle('resources')
//   submain.classList.toggle("isHidden")
//   resources.style.zIndex = "13"
//   submain.style.backgroundColor = "rgba(0, 90, 158, 1)";
//   submain.addEventListener('click', (e)=>{
//     submain.classList.remove("isHidden")
//     resources.classList.remove("isSrinked")
//   })
// })

articles.forEach((item, i) => {
  item.addEventListener('click', (e)=>{
    putInPlace(item, colors[item.id])
  })
})



// this function takes a variable from the blocks and put it
// in place when then click is triggered, it puts the element in
// font and the submain backgroundColor is set to the element background value
function putInPlace(item, bgvalue) {
  submain.innerHTML = `<h1>${item.innerText}</h1>`
  item.classList.toggle("isSrinked")
  submain.classList.toggle("isHidden")
  submain.style.backgroundColor = `${bgvalue}`;
  submain.addEventListener('click', (e)=>{
    submain.classList.remove("isHidden")
    item.classList.remove("isSrinked")
  })

}


displayPresentation.addEventListener('click', (e)=>{
  main.classList.toggle('presentation')
  main.querySelector('h1').classList.toggle('moveH1')
  displayPresentation.classList.toggle('notDisplay')
  displayPresentation.innerHTML = '<h5>Retour</h5>'
})
