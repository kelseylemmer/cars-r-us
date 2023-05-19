import { setWheelChoice } from "./TransientState.js"


const handleWheelChoice = (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setWheelChoice(convertedToInteger)
    }
}

export const WheelOptions = async () => {

    document.addEventListener("change", handleWheelChoice)

    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    let choicesHTML = `<select id="wheel"> <option value="0">Select a wheel style</option>`

    const divStringArray = wheels.map(
        (wheel) => {
            return `
                <option value='${wheel.id}'> ${wheel.type}</option>`
        }
    )

    // This function needs to return a single string, not an array of strings
    choicesHTML += divStringArray.join("")
    choicesHTML += "</select>"

    return choicesHTML
}