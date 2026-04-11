const screens = document.querySelectorAll('.screen');
const choose_bug_buttons = document.querySelectorAll('.choose-bug-button');
const start_button = document.getElementById('start-button')
const game_container = document.getElementById('game-container')
const timeElem = document.getElementById('time')
const scoreElem = document.getElementById('score')
const message = document.getElementById('message')
let username3 = null;
const gamemodes = {
    Easy: { seconds: 120 },
    Medium: { seconds: 90 },
    Hard: { seconds: 60 },
    Nightmare: { seconds: 30  }
}
let score = 0
let selected_bug = {}
let mode = 0;

start_button.addEventListener('click', () => screens[0].classList.add('up'))

choose_bug_buttons.forEach(button => {
    button.addEventListener('click', () => {
        const img = button.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_bug = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createBug, 1000)
        startGame()
    })
})

document.getElementById("Easy").addEventListener("click", () => {
    startGame("Easy");
})
document.getElementById("Medium").addEventListener("click", () => {
    startGame("Medium");
})
document.getElementById("Hard").addEventListener("click", () => {
    startGame("Hard");
})
document.getElementById("Nightmare").addEventListener("click", () => {
    startGame("Nightmare");
})


function startGame(gamemode) {
    seconds = gamemodes[gamemode].seconds
    setInterval(increaseTime, 1000)
    if (gamemode === "Easy"){
        mode ="Easy";    }
    if (gamemode === "Medium"){
        mode ="Medium";
    }
    if (gamemode === "Hard"){
        mode ="Hard";
    }
    if (gamemode === "Nightmare"){
        mode ="Nightmare";
    }
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeElem.innerHTML = `Time: ${m}:${s}`
  
    if(seconds <= 0){
        stopGame();
        return
    }
    seconds--

}

function createBug() {
    if(seconds<=0) return;
    
    const bug = document.createElement('div')
    bug.classList.add('bug')
    const { x, y } = getRandomLocation()
    bug.style.top = `${y}px`
    bug.style.left = `${x}px`
    bug.innerHTML = `<img src="${selected_bug.src}" alt="${selected_bug.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    bug.addEventListener('click', catchBug)

    game_container.appendChild(bug)
    

}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchBug() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addBugs()
}

function addBugs() {
    setTimeout(createBug, 1)

}

function increaseScore() {
    score++;
    scoreElem.innerHTML = `Score: ${score}`
}

function stopGame(){
    while (!username3){
      username3=prompt("What is thy name, Warrior?")
    }
    
    clearInterval(increaseTime);
    clearTimeout(createBug);
    message.innerHTML = `Game Over! Your score is <span id="score">${score}</span>`;
    message.classList.add('visible');
    
    saveData();
}

function saveData() {
    if (mode==="Easy"){
         const obj = {
        name: username3,
        score1: score,
      
    };
   const data3 = JSON.parse(localStorage.getItem("result1")) || [];
   exists = data3.some(entry => entry.name === username3);

   if(!exists){
       data3.push(obj);
       localStorage.setItem("result1", JSON.stringify(data3));
   }
   else{
    
   }
    }
      if (mode==="Medium"){
         const obj = {
        name: username3,
        score2: score,
      
    };
   const data4 = JSON.parse(localStorage.getItem("result2")) || [];
   exists = data4.some(entry => entry.name === username3);

   if(!exists){
       data4.push(obj);
       localStorage.setItem("result2", JSON.stringify(data4));
   }
   else{
    
   }
    }
      if (mode==="Hard"){
         const obj = {
        name: username3,
        score3: score,
      
    };
   const data5 = JSON.parse(localStorage.getItem("result3")) || [];
   exists = data5.some(entry => entry.name === username3);

   if(!exists){
       data5.push(obj);
       localStorage.setItem("result3", JSON.stringify(data5));
   }
   else{
    
   }
    }
      if (mode==="Nightmare"){
         const obj = {
        name: username3,
        score4: score,
      
    };
   const data6 = JSON.parse(localStorage.getItem("result4")) || [];
   exists = data6.some(entry => entry.name === username3);

   if(!exists){
       data6.push(obj);
       localStorage.setItem("result4", JSON.stringify(data6));
   }
   else{
    
   }
    }
      if (mode==="Easy"){
         const obj = {
        name: username3,
        score1: score,
      
    };
   const data3 = JSON.parse(localStorage.getItem("result")) || [];
   exists = data3.some(entry => entry.name === username3);

   if(!exists){
       data3.push(obj);
       localStorage.setItem("result", JSON.stringify(data3));
   }
   else{
    
   }
    }
   }
