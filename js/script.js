
const buttons = document.getElementsByClassName("button")

let arrayButtons = Array.from(buttons)



let screen = document.getElementById("screen")

let power = document.getElementById("power")


// set up volume bar ,
let volumeLength



let isOn = false

power.addEventListener("click", () => {

    isOn = !isOn

    if (isOn) {
        //volume lenght needs to be declared after the POWER button states its size

        volumeLength = 0
        screen.classList.add("whiteNoise")

    }
    else {
        screen.classList.remove(screen.classList[screen.classList.length - 1])

        for (let i = volumeLength; i > 0; i--) {

            document.getElementById(`volDis${i}`)
                .style.backgroundImage = `url(../img/Display_Volume.png)`

        }

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
                        if (evento.target.id == "volUp" && volumeLength < 15) {

                            volumeLength += 1
                            console.log(volumeLength)

                            document.getElementById(`volDis${volumeLength}`)
                                .style.backgroundImage = `url(../img/Display_Volume_on.png)`

                        }
                        else if ((volumeLength > 0) && evento.target.id == "volDown") {

                            document.getElementById(`volDis${volumeLength}`)
                                .style.backgroundImage = `url(../img/Display_Volume.png)`

                            volumeLength -= 1
                        }
                        break;
                }
            }
        })
    }

)

