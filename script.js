const cards = document.querySelectorAll(".card")
const modal = document.getElementById("modal")

const title = document.getElementById("letterTitle")
const text = document.getElementById("letterText")
const img = document.getElementById("letterImg")

const closeBtn = document.querySelector(".close")


const letters = {

1:{
title:"Когда тебе грустно",
text:"Я хочу чтобы ты помнила — ты невероятная.",
img:"img/photo1.png"
},

2:{
title:"Когда скучаешь",
text:"Скоро увидимся. И снова будет как всегда.",
img:"img/photo2.png"
}

}


cards.forEach(card=>{

card.addEventListener("click",()=>{

const id = card.dataset.id
const data = letters[id]

title.textContent = data.title
text.textContent = data.text
img.src = data.img

modal.classList.add("active")

})

})


closeBtn.onclick=()=>{
modal.classList.remove("active")
}

modal.onclick=(e)=>{
if(e.target===modal){
modal.classList.remove("active")
}
}