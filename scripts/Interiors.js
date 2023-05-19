import { setInteriorChoice } from "./TransientState.js"

const handleInteriorChoice = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setInteriorChoice(convertedToInteger)
    }
}

export const InteriorOptions = async () => {

    document.addEventListener("change", handleInteriorChoice)

    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    let choicesHTML = `<select id="interior"> <option value="0">Select an interior material</option>`

    const divStringArray = interiors.map(
        (interior) => {
            return `
                <option value='${interior.id}'> ${interior.fabric}</option>`
        }
    )

    // This function needs to return a single string, not an array of strings
    choicesHTML += divStringArray.join("")
    choicesHTML += "</select>"

    return choicesHTML
}