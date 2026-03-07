const cards = document.querySelectorAll(".card")
const modal = document.getElementById("modal")

const title = document.getElementById("letterTitle")
const text = document.getElementById("letterText")
const img = document.getElementById("letterImg")

const closeBtn = document.querySelector(".close")
const actionResultContainer = document.getElementById("actionResult")


const letters = {

1:{
title:"Когда тебе грустно",
text:`Иногда день бывает тяжелым.

Иногда настроение падает без причины.
Иногда кажется, что всё наваливается сразу.

В такие моменты легко забыть одну простую вещь.

Ты человек, рядом с которым становится теплее.

Ты умеешь делать обычные моменты особенными —
иногда даже не замечая этого.

Когда мы рядом, многие вещи становятся проще.
Спокойнее.
Настоящими.

Поэтому если сегодня вдруг грустно —
просто помни:

в этом мире есть человек,
которому очень важно,
чтобы ты улыбалась.

И этот человек — я.`,
img:"img/1.png"
},


2:{
title:"Когда скучаешь",
text:`Если ты открыла это — значит где-то между делами или вечером появилась мысль обо мне.
Честно?
Я иногда ловлю себя на том же.

Иногда это какая-нибудь мелочь:
музыка, случайная фраза, фильм, место на улице.

И вдруг мысль —
«Было бы здорово, если бы она сейчас была рядом».

Мне нравится то ощущение, которое появляется рядом с тобой.
Без напряжения.
Без игры.
Просто спокойно и по-настоящему.

Поэтому если вдруг скучаешь — это значит, что между нами есть что-то живое.
И это хорошее чувство.`,
img:"img/2.gif"
},


3:{
title:"Когда сомневаешься в себе",
text:`Иногда люди смотрят на себя слишком строго.

Кажется, что можно было сделать лучше.
Сказать правильнее.
Быть увереннее.

Но со стороны многие вещи выглядят иначе.

Ты умная.
Ты внимательная к людям.
Ты умеешь чувствовать атмосферу и настроение вокруг.

И это гораздо ценнее, чем кажется.

Люди редко видят себя объективно.
Но иногда достаточно одного взгляда со стороны, чтобы понять —
ты уже намного больше, чем думаешь.`,
img:"img/photo1.png"
},


4:{
title:"Когда не можешь уснуть",
text:`Иногда ночь затягивается.

Мысли начинают ходить по кругу.
Телефон откладывается, но сон всё равно не приходит.

В такие моменты есть один хороший способ немного успокоить голову.

Представь обычный вечер.
Мы идем по улице после прогулки.
Немного прохладно.
Город уже тихий.

Никакой спешки.
Никаких мыслей о делах.

Просто разговоры, шаги рядом и ощущение, что этот момент никуда не торопится.

Иногда таких простых картинок достаточно, чтобы мысли стали тише.`,
img:"img/photo1.png"
},

5:{
title:"Когда вспоминаешь нас",
text:`Забавно, как быстро обычные моменты могут становиться воспоминаниями.

Сначала это просто встреча.
Разговор.
Прогулка.
Фильм.

А потом через время ты ловишь себя на мысли:
«Это был хороший день».

Мне нравится, что между нами уже появились такие маленькие точки на карте времени.

30 декабря.
Первые встречи.
Первый поцелуй.

Это всё маленькие моменты, но именно из них и складываются настоящие истории.`,
img:"img/photo1.png"
},

6:{
title:"Когда хочешь улыбнуться",
text:`Есть одна вещь, которую я заметил.

Твоя улыбка немного заразительная.

Когда ты улыбаешься — атмосфера вокруг меняется.
Становится легче разговаривать, легче шутить, легче просто быть рядом.

Поэтому если ты открыла это письмо — вот маленькое задание:

Сейчас попробуй улыбнуться.

Даже если без причины.

Иногда одна маленькая улыбка может изменить весь вечер.`,
img:"img/photo1.png"
},

7:{
title:"Когда злишься",
text:`Иногда всё раздражает.

Люди.
Сообщения.
Ситуации.
Даже мелочи.

Это нормально.

У всех бывают такие дни, когда лучше просто немного выдохнуть и дать себе время.

Поэтому если сейчас такой момент — ничего страшного.

Иногда лучший способ справиться с этим — просто сделать паузу.

А потом вернуться к миру чуть спокойнее.`,
img:"img/photo1.png"
},

8:{
title:"С 8 марта",
text:`Сегодня просто хороший повод сказать одну вещь.

Мне очень повезло, что мы встретились.

Сначала это было просто знакомство.
Потом встречи.
Потом моменты, которые начали становиться важными.

Иногда хорошие истории начинаются очень спокойно.

Без громких событий.
Без планов наперед.

Просто два человека постепенно понимают, что рядом им хорошо.

И мне нравится, куда движется наша история.

С 8 марта.`,
img:"img/photo1.png"
}

}


const actions = {
1:"Обнять",
2:"Отправить мысль",
3:"Напомнить ещё",
4:"Тихая ночь",
5:"Посмотреть воспоминания",
6:"Случайная улыбка",
7:"Выпустить пар",
8:"Открыть подарок"
}



let currentLetterId = null; // хранит текущий раздел

cards.forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.id
    currentLetterId = id; // обновляем текущий раздел
    showLetter(id)
    modal.classList.add("active")
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

function restoreLetter() {
  if (!currentLetterId) return;
  showLetter(currentLetterId) // восстанавливаем именно текущий раздел
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
    restoreLetter()
  }
})

// функция обработки действия
function handleAction(id) {
  const letterContent = document.querySelector(".letter-content")
  actionResultContainer.innerHTML = ""

  if (id == 1) { // hug
    letterContent.innerHTML = `
      <div class="hug-scene">
        <img src="img/2.gif" class="hug-gif">
        <div class="hug-message">Виртуальное объятие доставлено.<br>Иногда даже экран может обнять.</div>
        <div class="hearts"></div>
        <button class="hug-back">Вернуться</button>
      </div>
    `
    createHearts()
    if(navigator.vibrate) navigator.vibrate([30,40,30])

    // кнопка "Вернуться" для hug
    document.querySelector(".hug-back").onclick = () => restoreLetter(1)
  }

  if (id == 2) { // мысли
    letterContent.innerHTML = `
      <div class="thoughts-scene">
        <img src="img/2.gif" class="city-gif">
        <div class="clouds-container"></div>
        <button class="thoughts-back">Вернуться</button>
      </div>
    `
    const cloudsContainer = document.querySelector(".clouds-container")

    const phrases = [
      "Я представляю, как ты идёшь по улице, и улыбаюсь.",
      "Скоро снова увижу тебя, и это греет.",
      "Каждая мысль обо мне с тобой возвращается, будто тепло.",
      "Я помню твой смех и день сразу светлеет.",
      "Иногда хочется просто сказать: «Я скучаю».",
      "Ты там, а я тут, но мысленно мы рядом.",
      "Когда думаю о тебе — всё вокруг кажется спокойнее."
    ]

    const totalHeight = 60 // область сверху вниз
    const startTop = 15
    const step = totalHeight / phrases.length

    phrases.forEach((phrase, i) => {
      const cloud = document.createElement("div")
      cloud.className = "thought-cloud"
      cloud.textContent = phrase
      cloud.style.top = startTop + step * i + "%"
      cloud.style.left = 20 + Math.random() * 60 + "%"
      cloud.style.animationDelay = (i*0.2) + "s"

      cloud.onclick = () => {
        cloud.style.transform = "scale(1.2)"
        cloud.style.opacity = 0
        if(navigator.vibrate) navigator.vibrate(20)
        setTimeout(() => cloud.remove(), 300)
      }

      cloudsContainer.appendChild(cloud)
    })

    // кнопка "Вернуться" для мыслей
    document.querySelector(".thoughts-back").onclick = () => restoreLetter(2)
  }

  // остальные действия (3–8)
  if(id == 3){
    const phrases = [
      "Ты справляешься лучше, чем думаешь.",
      "У тебя получается больше, чем кажется.",
      "Иногда просто нужно немного времени."
    ]
    actionResultContainer.textContent = phrases[Math.floor(Math.random()*phrases.length)]
  }

  if(id == 4){
    document.body.style.background = "#000"
    actionResultContainer.textContent = "Ночь стала немного тише."
  }

  if(id == 5){
    actionResultContainer.innerHTML = `
      <p>30 декабря — первая встреча</p>
      <p>Первая прогулка</p>
      <p>Первый поцелуй</p>
    `
  }

  if(id == 6){
    const smiles = [
      "Ты улыбаешься очень по-настоящему.",
      "Эта улыбка немного заразительная.",
      "Улыбка тебе очень идет."
    ]
    actionResultContainer.textContent = smiles[Math.floor(Math.random()*smiles.length)]
  }

  if(id == 7){
    document.body.style.transform = "translateX(4px)"
    setTimeout(()=>document.body.style.transform="translateX(-4px)",80)
    setTimeout(()=>document.body.style.transform="translateX(0)",160)
    actionResultContainer.textContent = "Стало чуть легче?"
  }

  if(id == 8){
    actionResultContainer.textContent = "С 8 марта 🌸"
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
closeBtn.onclick = () => modal.classList.remove("active")
modal.onclick = (e) => { if(e.target === modal) modal.classList.remove("active") }
