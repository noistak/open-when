const cards = document.querySelectorAll(".card")
const modal = document.getElementById("modal")

const title = document.getElementById("letterTitle")
const text = document.getElementById("letterText")
const img = document.getElementById("letterImg")

const closeBtn = document.querySelector(".close")


const letters = {

1:{
title:"Когда тебе грустно",
text:`Иногда день складывается тяжело.

Мысли путаются,
настроение становится тише,
и всё начинает давить чуть сильнее, чем обычно.

В такие моменты легко забыть одну вещь.

Ты – человек, рядом с которым становится теплее.
С тобой спокойнее, легче говорить и легче улыбаться.

Поэтому если вдруг станет грустно –
просто вспомни:

есть человек,
которому очень важно,
чтобы ты снова улыбнулась.

И этот человек – я.`,
img:"img/1.gif"
},



2:{
title:"Когда тебе одиноко",
text:`Иногда появляется тихий вечер,
когда вокруг становится слишком спокойно.

Будто хочется кому-то что-то рассказать,
поделиться маленьким моментом дня
или просто услышать знакомый голос.

Но даже в такие моменты ты не одна.

Есть человек,
который думает о тебе чаще,
чем ты можешь представить.

Которому важно,
как проходит твой день
и какое у тебя настроение.

И этому человеку очень повезло,
что в его жизни есть ты.`,
img:"img/2.gif"
},



3:{
title:"Когда не можешь уснуть",
text:`Ночью всё становится тише.

День заканчивается,
мысли начинают бродить медленнее,
и иногда сон почему-то не приходит.

В такие моменты хорошо вспоминать что-то тёплое.

Разговор,
смех без причины,
или момент,
когда рядом просто было хорошо.

Если этой ночью не получается уснуть –
просто знай:

где-то есть человек,
которому приятно думать о тебе
перед тем, как закрыть глаза.`,
img:"img/3.gif"
},



4:{
title:"Когда вспоминаешь нас",
text:`Иногда воспоминания приходят неожиданно.

Фраза,
песня,
случайное место на улице –
и вдруг всплывает один из наших моментов.

Смех,
разговоры дольше, чем планировалось,
и ощущение,
что рядом просто хорошо.

Мне нравятся такие воспоминания.

Потому что в них есть что-то настоящее –
наши маленькие моменты,
которые уже стали частью нас.`,
img:"img/4.gif"
},



5:{
title:"Когда хочешь улыбнуться",
text:`Иногда для улыбки не нужна причина.

Достаточно одной мысли,
одного тёплого воспоминания
или просто хорошего момента дня.

Твоя улыбка – одна из вещей,
которые делают мир вокруг немного светлее.

Она настоящая.
Лёгкая.
Та, от которой хочется улыбнуться в ответ.

Поэтому если вдруг захочется улыбнуться –
просто сделай это.`,
img:"img/5.gif"
},



6:{
title:"Когда у тебя тяжёлый день",
text:`Иногда день идёт совсем не так.

Планы ломаются,
мелочи раздражают,
и сил становится меньше.

Такие дни бывают у всех.

Но они всегда заканчиваются.

Иногда всё, что нужно –
немного тишины,
отдохнуть
и позволить себе выдохнуть.

Завтра будет легче.`,
img:"img/6.gif"
},



7:{
title:"Когда хочешь почувствовать, как ты мне дорога",
text:`Иногда трудно подобрать слова.

Потому что некоторые вещи ощущаются сильнее,
чем их можно объяснить.

Но одно я знаю точно.

Ты стала человеком,
о котором хочется думать.

Тем,
с кем хочется делиться мыслями,
радостями
и даже самыми обычными моментами дня.

И если когда-нибудь тебе захочется вспомнить,
что ты для меня значишь –

просто знай:

ты действительно дорога мне.`,
img:"img/7.gif"
},



8:{
title:"С 8 марта",
text:`Иногда в жизни встречаются люди,
рядом с которыми всё становится немного лучше.

День – теплее,
разговоры – легче,
а обычные моменты вдруг становятся особенными.

Ты именно такой человек для меня.

С тобой спокойно,
легко смеяться
и просто хорошо быть рядом.

Поэтому сегодня хочется пожелать,
чтобы в твоей жизни всегда было
столько же тепла и внимания,
сколько ты даришь другим.`,
img:"img/8.gif"
}
}

const actions = {
1:"Обнять",
2:"Отправить мысль",
3:"Сделать ночь тише",
4:"Открыть момент",
5:"Улыбнись",
6:"Выдохнуть",
7:"Напомнить",
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
        <img src="img/11.gif" class="hug-gif">
        <div class="hug-message">Виртуальное объятие доставлено.<br>
          Тепло и поддержка могут быть ближе, чем кажется.<br></div>
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
      <img src="img/22.gif" class="city-gif">
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
    "Я помню твой смех и день становится светлее",
    "Иногда просто хочется сказать: «Я скучаю»",
    "Ты там, а я мысленно рядом, и это важно"
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
  const letterEl = document.querySelector(".letter");
  letterEl.classList.add("night"); // ставим темный фон

  const letterContent = document.querySelector(".letter-content");
  letterContent.innerHTML = `
    <div class="night-scene">
      <img src="img/3.gif" class="night-gif">
        <div class="night-text">
          Ночь становится тише, и мысли словно останавливаются.<br>
          Дай себе немного тишины, почувствуй, как день уходит,<br>
          а вокруг наступает покой. <br> 
          Доброй ночи ✨
        </div>
      <button class="back-btn night-back">Вернуться</button>
    </div>
  `;

  // при возврате — удаляем класс
  document.querySelector(".night-back").onclick = () => {
    restoreLetter(3);
    letterEl.classList.remove("night");
  }
}


if(id == 4){

  letterContent.innerHTML = `
    <div class="scene-four">

      <img src="img/44.gif" class="scene-four-gif">

      <div class="scene-four-text">
        Вспомни этот момент вместе с музыкой.<br>
        Этот плейлист играет именно для тебя,<br>
        и каждая песня напоминает мне о тебе.<br>
        Держи его в сердце, пусть согревает.
      </div>

      <button class="back-btn">Вернуться</button>

    </div>
  `

  document.querySelector(".back-btn").onclick = () => restoreLetter(4)

}

if(id == 5){

  letterContent.innerHTML = `
    <div class="scene-five">

      <img src="img/55.gif" class="scene-five-gif">

      <div class="scene-five-text">
        Я увидел тебя — и улыбка появилась сама собой.<br>
        Лёгкое изумление, тепло внутри,<br>
        и мгновение стало чуть ярче.<br>
        Пусть твоя улыбка продолжает согревать день.
      </div>

      <button class="back-btn">Вернуться</button>

    </div>
  `

  document.querySelector(".back-btn").onclick = () => restoreLetter(5)

}

if(id == 6){

  letterContent.innerHTML = `
    <div class="scene-six">

      <img src="img/66.gif" class="scene-six-gif">

      <div class="scene-six-text">
        Сделай глубокий вдох и выдохни.<br>
          Пусть тяжесть уходит, мысли замедляются,<br>
          и мир вокруг кажется немного проще.
      </div>

      <button class="back-btn">Вернуться</button>

    </div>
  `

  document.querySelector(".back-btn").onclick = () => restoreLetter(6)

}

if(id == 7){

  letterContent.innerHTML = `
    <div class="scene-seven">

      <img src="img/7.gif" class="scene-seven-gif">

      <div class="scene-seven-text">
        Пусть это напоминание согреет: есть человек,<br>
        для которого ты важна, рядом с которым становится лучше.<br>
        Иногда достаточно просто вспомнить об этом.
      </div>

      <button class="back-btn">Вернуться</button>

    </div>
  `

  document.querySelector(".back-btn").onclick = () => restoreLetter(7)

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
  const letterEl = document.querySelector(".letter");
  letterEl.classList.remove("night"); // удаляем тёмный фон
  document.querySelector(".letter-content").innerHTML = ""
}

modal.onclick = (e) => {
  if(e.target === modal){
    modal.classList.remove("active")
    document.body.style.overflow = ""
    const letterEl = document.querySelector(".letter");
    letterEl.classList.remove("night"); // удаляем тёмный фон
    document.querySelector(".letter-content").innerHTML = ""
  }
}
