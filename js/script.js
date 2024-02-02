
const buttons = document.getElementsByClassName("button")

let arrayButtons = Array.from(buttons)

let screen = document.getElementById("screen")

let power = document.getElementById("power")


// set up volume bar ,
let volumeBar = document.getElementById("volumeBar")
let volumeLength


console.log(volumeBar)

let isOn = false

power.addEventListener("click", () => {

    isOn = !isOn

    if (isOn) {
        //volume lenght needs to be declared after the POWER button states its size
        volumeBar.style.width = "2em"
        volumeLength = 2
        screen.classList.add("whiteNoise")

    }
    else {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
    }
    console.log("Power", isOn ? "ON" : "OFF")

})

console.log(volumeLength)

arrayButtons.map(
    items => {


        items.addEventListener("click", (evento) => {
            if (isOn) {


                switch (evento.target.id.split("")[0]) {

                    case "c":
                        console.log(evento.target.id, "has been clicked inside switch")
                        screen.classList.remove(screen.classList[screen.classList.length - 1])
                        screen.classList.add("canal" + evento.target.id.slice(-1))

                        break;

                    case "v":
                        console.log("volume Button has been pressed")
                        if (evento.target.id == "volUp") {
                            console.log("esta dentro")
                            volumeLength += 1
                            console.log(volumeLength)
                            volumeBar.style.width = `${volumeLength}em`
                        }
                        else if ((volumeLength > 2) && evento.target.id == "volDown") {
                            volumeLength -= 1
                            console.log(volumeLength)
                            volumeBar.style.width = `${volumeLength}em`
                        }
                        break;


                }
            }
        })
    }

)

