
let startCount = document.getElementsByClassName('start-btn')[0]

startCount.addEventListener("click", () =>{
    // Tempo em segundos
    let sec = 10;
    
    const countDiv = document.getElementsByClassName('timer')[0]

    const secPass = () => {

        if(sec > 0) {
            startCount.disabled = true

            let min = Math.floor(sec / 60)
            let secRest = sec % 60

            secRest = secRest < 10? `0${secRest}`: secRest
            min = min < 10? `0${min}` : min

            countDiv.innerHTML = `${min}:${secRest}`

            sec -= 1

        } else {
            countDiv.innerHTML = "Tempo Esgotado!"
            clearInterval(setDown)
            startCount.disabled = false
        }
    }

    const setDown = setInterval(() => secPass(), 1000)

}) 