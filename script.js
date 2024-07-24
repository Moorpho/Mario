const mario = document.getElementById('mario')
const turtle= document.getElementById('turtle')
const button = document.querySelector('.start')

let isStart = false
let interval

const activeJump = () => {
    if(isStart) {
        if(!mario.classList.contains('active')) {
            mario.classList.add('active')
            }
           
            setTimeout(()=>{
                mario.classList.remove('active')
            },300)
    } 
}

const startGame = () => {
    isStart = true
    turtle.classList.add('animate')
    
    interval = setInterval(()=> {
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue('top'))
    let turtleLeft = parseInt(window.getComputedStyle(turtle).getPropertyValue('left'))

    if (turtleLeft< 50 && turtleLeft > 0 && marioTop >= 140) {
        endGame()
    }

    },10)
}

const endGame = () => {
    isStart = false
    clearInterval(interval)

    turtle.classList.remove('animate')

    alert('GAME OVER!')

}

document.addEventListener('keydown',activeJump) 

button.addEventListener('click', ( ) => {
    startGame()
})