const cards = document.querySelectorAll(".card")
const modal = document.getElementById("modal")

const title = document.getElementById("letterTitle")
const text = document.getElementById("letterText")
const img = document.getElementById("letterImg")

const closeBtn = document.querySelector(".close")


const letters = {

1:{
title:"Когда тебе грустно",
text:`Иногда день складывается не так, как хотелось.

Мелочи начинают давить, мысли путаются,
и настроение будто становится тяжелее.

В такие моменты легко почувствовать себя немного потерянной.

Но есть одна вещь, о которой важно помнить.

Ты — человек, который приносит в этот мир тепло.
Не специально, не стараясь — просто потому что ты такая.

Рядом с тобой становится спокойнее.
Легче дышать, легче говорить, легче улыбаться.

И для меня это особенно чувствуется.

Поэтому если когда-нибудь станет грустно,
если день вдруг покажется слишком тяжёлым —

просто вспомни одну простую вещь:

где-то есть человек,
которому невероятно важно, как ты себя чувствуешь,
который всегда на твоей стороне
и которому очень хочется, чтобы ты снова улыбнулась.

И этот человек — я.`,
img:"img/1.png"
},



2:{
title:"Когда тебе одиноко",
text:`Иногда одиночество появляется очень тихо.
Без причины, без события — просто момент,
когда вдруг не хватает чьего-то присутствия рядом.

Будто хочется с кем-то поделиться мыслью,
рассказать что-нибудь маленькое из дня
или просто услышать знакомый голос.

В такие моменты важно помнить одну вещь.

Даже если вокруг тихо,
ты никогда не остаёшься по-настоящему одна.

Потому что где-то есть человек,
для которого ты — не просто часть дня.

Ты — человек, о котором он думает,
когда происходит что-то хорошее.
И о котором вспоминает,
когда хочется поделиться теплом.

И если однажды вечером станет немного одиноко —
просто представь,
что где-то есть я,

и мне очень повезло,
что в моей жизни есть ты.`,
img:"img/2.gif"
},



3:{
title:"Когда не можешь уснуть",
text:`Ночь иногда делает мысли громче.

Днём всё происходит быстро —
дела, разговоры, события.

А ночью всё замедляется.
Появляется тишина,
и вместе с ней — время просто думать.

Иногда о прошедшем дне.
Иногда о будущем.
А иногда о людях, которые стали важными.

Если вдруг этой ночью сон не приходит,
позволь мыслям привести тебя к чему-нибудь тёплому.

К воспоминанию о хорошем разговоре.
К моменту, когда ты смеялась.
К ощущению, что рядом есть человек,
которому с тобой по-настоящему хорошо.

Потому что для меня именно так.

И если сейчас ты лежишь и смотришь в потолок,
просто знай —

в мире есть человек,
которому очень приятно думать о тебе
перед тем, как закрыть глаза.`,
img:"img/3.png"
},



4:{
title:"Когда вспоминаешь нас",
text:`Иногда воспоминания приходят сами.

Какая-то фраза, случайная песня,
место на улице или просто мысль —
и вдруг всплывает один из наших моментов.

Разговоры, которые тянулись дольше, чем планировалось.
Смех без особой причины.
И то лёгкое чувство, когда рядом просто хорошо.

Мне нравятся такие воспоминания.

Потому что в них есть что-то настоящее —
живые моменты, которые мы прожили вместе.

И если когда-нибудь ты будешь вспоминать нас,
я хочу, чтобы эти мысли были тёплыми.

Такими, от которых становится спокойно
и немного приятно улыбнуться.`,
img:"img/4.png"
},



5:{
title:"Когда хочешь улыбнуться",
text:`Иногда улыбка появляется сама.

От смешной мысли.
От тёплого воспоминания.
Или от какого-то маленького момента дня.

Ты из тех людей, которые умеют улыбаться по-настоящему.
Легко и искренне.

И, честно говоря, это одна из вещей,
которые делают тебя особенной.

Твоя улыбка меняет атмосферу вокруг.
Будто всё становится немного светлее.

Поэтому если вдруг захочется улыбнуться —
сделай это без причины.

Мир от этого точно станет немного лучше.`,
img:"img/5.gif"
},



6:{
title:"Когда у тебя тяжёлый день",
text:`Бывают дни, когда всё идёт не так.

Планы рушатся, мелочи раздражают,
и кажется, будто энергии стало намного меньше.

В такие моменты день может ощущаться бесконечным.

Но даже самый тяжёлый день заканчивается.

И иногда всё, что нужно —
это немного времени, тишины
и чьё-то тёплое слово.

Поэтому если сегодня был именно такой день —
постарайся немного выдохнуть.

Ты сильнее, чем кажется в трудные моменты.
И впереди обязательно будут дни легче и спокойнее.`,
img:"img/6.png"
},



7:{
title:"Когда хочешь почувствовать, как ты мне дорога",
text:`Иногда слова трудно подобрать.

Потому что некоторые вещи ощущаются сильнее,
чем их можно объяснить.

Но одно я знаю точно.

Ты стала человеком,
о котором хочется думать.

Тем, с кем хочется делиться мыслями,
радостями, идеями
и даже самыми обычными моментами дня.

Ты важна для меня.

Не из-за каких-то громких причин,
а из-за множества маленьких вещей —
твоего характера, твоих мыслей,
того, как легко и тепло рядом с тобой.

И если когда-нибудь тебе захочется вспомнить,
что ты для меня значишь —

просто знай:

ты по-настоящему дорога мне.`,
img:"img/7.png"
},



8:{
title:"С 8 марта",
text:`Сегодня хочется сказать простую, но важную вещь.

Иногда встречаются люди, рядом с которыми всё становится немного лучше.
День — теплее, разговоры — легче,
а обычные моменты вдруг становятся по-настоящему ценными.

Ты именно такой человек для меня.

В тебе есть редкое сочетание — искренность, доброта и спокойствие,
которое чувствуется сразу.
С тобой легко говорить, легко смеяться
и просто хорошо находиться рядом.

И, наверное, самое особенное —
ты умеешь делать даже самые обычные моменты тёплыми и настоящими.

Поэтому в этот день хочется пожелать,
чтобы в твоей жизни всегда было столько же тепла, внимания и радости,
сколько ты сама приносишь в жизнь других.

И чтобы рядом с тобой всегда были люди,
которые ценят тебя так же сильно, как ценю тебя я.
`,
img:"img/8.png"
}
}

const actions = {
1:"Обнять",
2:"Отправить мысль",
3:"Тихая ночь",
4:"Посмотреть воспоминания",
5:"Случайная улыбка",
6:"Выпустить пар",
7:"Спасибо",
8:"Получить"
}

let currentLetterId = null; // хранит текущий раздел

cards.forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.id
    currentLetterId = id
    showLetter(id)

    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  })
})

function showLetter(id) {
  const data = letters[id]
  const letterContent = document.querySelector(".letter-content")
  
  letterContent.innerHTML = `
    <h2 id="letterTitle">${data.title}</h2>
    <p id="letterText">${data.text}</p>
    <img id="letterImg" src="${data.img}">
    <button id="actionBtn" class="action-btn">${actions[id]}</button>
    <div id="actionResult"></div>
  `

  setupActionButton(id)
}

function setupActionButton(id) {
  const actionBtn = document.getElementById("actionBtn")
  actionBtn.replaceWith(actionBtn.cloneNode(true)) // сброс обработчиков
  const newActionBtn = document.getElementById("actionBtn")
  newActionBtn.addEventListener("click", () => handleAction(id))
}

// кнопки "Вернуться" внутри hug или мысли
document.addEventListener("click", e => {
  if (e.target.classList.contains("hug-back") || e.target.classList.contains("thoughts-back")) {
    restoreLetter(currentLetterId)
  }
})

// функция обработки действия
function handleAction(id) {
  const letterContent = document.querySelector(".letter-content")
  const actionResultContainer = document.getElementById("actionResult")

  actionResultContainer.innerHTML = ""

if (id == 1) { // hug
    letterContent.innerHTML = `
      <div class="hug-scene">
        <img src="img/2.gif" class="hug-gif">
        <div class="hug-message">Виртуальное объятие доставлено.<br>Иногда даже экран может обнять.</div>
        <div class="hearts"></div>
        <button class="back-btn">Вернуться</button>
      </div>
    `
    createHearts()
    if(navigator.vibrate) navigator.vibrate([30,40,30])

    // кнопка "Вернуться" для hug
    document.querySelector(".back-btn").onclick = () => restoreLetter(1)
}

if (id == 2) { // мысли
  letterContent.innerHTML = `
    <div class="thoughts-scene">
      <img src="img/2.gif" class="city-gif">
      <div class="clouds-container"></div>
      <div class="thoughts-hint">Нажми на облака, чтобы "лопнуть"</div>
      <button class="back-btn">Вернуться</button>
    </div>
  `

  const cloudsContainer = document.querySelector(".clouds-container")
  const hint = document.querySelector(".thoughts-hint")
  const phrases = [
    "Я представляю, как ты идёшь по улице, и улыбаюсь",
    "Скоро снова увижу тебя, и это греет",
    "Я помню твой смех и день сразу светлеет",
    "Иногда хочется просто сказать: «Я скучаю»",
    "Ты там, а я тут, но мысленно мы рядом"
  ]

  const fixedPositions = [
  {top: 20, left: 20},
  {top: 40, left: 50},
  {top: 60, left: 30},
  {top: 50, left: 5},
  {top: 35, left: 1}
]

phrases.forEach((phrase, i) => {
  const cloud = document.createElement("div")
  cloud.className = "thought-cloud"
  cloud.textContent = phrase

  const pos = fixedPositions[i]
  cloud.style.top = pos.top + "%"
  cloud.style.left = pos.left + "%"

  cloud.style.animationDelay = (i*0.2) + "s"
  cloud.onclick = () => {
    cloud.style.transform = "scale(1.2) translate(-50%, -50%)"
    cloud.style.opacity = 0
    if(navigator.vibrate) navigator.vibrate(20)
    setTimeout(()=>cloud.remove(),300)
  }

  cloudsContainer.appendChild(cloud)
})

  // кнопка "Вернуться"
  document.querySelector(".back-btn").onclick = () => restoreLetter(2)
}


if(id == 3){ 

}


if(id == 4){
    
}

if(id == 5){
   
}

if(id == 6){
    
}

if(id == 7){
    
}


if(id == 8){

  const flowers = ["🌷","🌹","🌸","🌺","🌼","💐"]

  const letterContent = document.querySelector(".letter-content")

  letterContent.innerHTML = `
    <div class="march-scene">
      <div class="march-message">С 8 марта 💐</div>
      <div class="flower-rain"></div>
      <button class="back-btn">Вернуться</button>
    </div>
  `

  const container = document.querySelector(".flower-rain")

  for(let i=0;i<25;i++){

    const flower = document.createElement("div")
    flower.className = "rain-flower"
    flower.textContent = flowers[Math.floor(Math.random()*flowers.length)]

    flower.style.left = Math.random()*100 + "%"
    flower.style.fontSize = (20 + Math.random()*20) + "px"
    flower.style.animationDelay = Math.random()*1.5 + "s"

    container.appendChild(flower)
  }

  document.querySelector(".back-btn").onclick = () => restoreLetter(8)
}
}

// функция восстановления письма после "Вернуться"
function restoreLetter(id){
  const data = letters[id]
  const letterContent = document.querySelector(".letter-content")

  letterContent.innerHTML = `
    <h2 id="letterTitle">${data.title}</h2>
    <p id="letterText">${data.text}</p>
    <img id="letterImg" src="${data.img}">
    <button id="actionBtn" class="action-btn">${actions[id]}</button>
    <div id="actionResult"></div>
  `

  setupActionButton(id) // перепривязываем обработчик
}





// функция создания сердец
function createHearts(){
  const container = document.querySelector(".hearts")
  container.innerHTML = ""

  for(let i=0;i<6;i++){
    const heart = document.createElement("div")
    heart.className = "heart"
    heart.innerHTML = "❤️"
    heart.style.left = (Math.random()*120-60)+"px"
    heart.style.animationDelay = (Math.random()*0.5)+"s"
    container.appendChild(heart)
  }

  setTimeout(()=>container.innerHTML = "",2000)
}

// закрытие модалки
closeBtn.onclick = () => {
  modal.classList.remove("active")
  document.body.style.overflow = ""
}

modal.onclick = (e) => {
  if(e.target === modal){
    modal.classList.remove("active")
    document.body.style.overflow = ""
  }
}
