
const buttons = document.getElementsByClassName("button")

let arrayButtons = Array.from(buttons)


let screen = document.getElementById("screen")

let power = document.getElementById("power")

let screenFilter = document.getElementById("glassFilter")

// set up volume bar ,
let volumeLength

let filterLength = 0

let isOn = false

power.addEventListener("click", () => {

    isOn = !isOn

    screenFilter.classList.remove(screenFilter.classList[screenFilter.classList.length - 1])
    screenFilter.classList.add(`glass-filter-0`)

    if (isOn) {
        //volume lenght needs to be declared after the POWER button states its size

        volumeLength = 0
        screen.classList.add("whiteNoise")

    }
    else {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        //reset volume
        for (let i = volumeLength; i > 0; i--) {

            document.getElementById(`volDis${i}`)
                .style.backgroundImage = ""

        }
        //reset filters
        for (let i = 1; i < 4; i++) {
            document.getElementById(`f${i}`).style.marginTop = ""
        }

    }
    console.log("Power", isOn ? "ON" : "OFF")

})


arrayButtons.map(
    items => {


        items.addEventListener("click", (evento) => {
            if (isOn) {


                switch (evento.target.id.split("")[0]) {

                    case "c":
                        console.log(evento.target.id, "has been clicked inside switch")

                        screen.classList.remove(screen.classList[screen.classList.length - 1])
                        screen.classList.add("channel" + evento.target.id.slice(-1))

                        break;

                    case "v":
                        console.log("volume Button has been pressed")

                        //for volume up
                        if (evento.target.id == "volUp" && volumeLength < 15) {

                            volumeLength += 1
                            console.log(volumeLength)

                            document.getElementById(`volDis${volumeLength}`)
                                .style.backgroundImage = `url(../img/Display_Volume_on.png)`

                        }

                        // for volume down 
                        else if ((volumeLength > 0) && evento.target.id == "volDown") {

                            document.getElementById(`volDis${volumeLength}`)
                                .style.backgroundImage = `url(../img/Display_Volume.png)`

                            volumeLength -= 1
                        }
                        break;

                    case "f":

                        // if im not pressing the same button
                        if (filterLength != evento.target.id.slice(-1)) {

                            console.log("filter changed")
                            filterLength = evento.target.id.slice(-1)

                            screenFilter.classList.remove(screenFilter
                                .classList[screenFilter.classList.length - 1])

                            screenFilter.classList.add(`glass-filter-${filterLength}`)

                            for (let i = 1; i < 4; i++) {
                                document.getElementById(`f${i}`).style.marginTop = ""
                            }

                            document.getElementById(evento.target.id).style.marginTop = "2px"

                        }

                        else if (filterLength == evento.target.id.slice(-1)) {
                            console.log("filter off")
                            filterLength = 0
                            screenFilter.classList.remove(screenFilter
                                .classList[screenFilter.classList.length - 1])

                            screenFilter.classList.add(`glass-filter-0`)

                            for (let i = 1; i < 4; i++) {
                                document.getElementById(`f${i}`).style.marginTop = ""
                            }


                        }

                        break;


                }
            }
        })
    }

)

