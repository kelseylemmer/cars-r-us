import { setTechChoice } from "./TransientState.js"

const handleTechChoice = (changeEvent) => {
    if (changeEvent.target.id === "tech") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setTechChoice(convertedToInteger)
    }
}

export const TechOptions = async () => {

    document.addEventListener("change", handleTechChoice)

    const response = await fetch("http://localhost:8088/techs")
    const techs = await response.json()

    let choicesHTML = `<select id="tech"> <option value="0">Select a technology package</option>`

    const divStringArray = techs.map(
        (tech) => {
            return `
                <option value='${tech.id}'> ${tech.package}</option>`
        }
    )

    // This function needs to return a single string, not an array of strings
    choicesHTML += divStringArray.join("")
    choicesHTML += "</select>"

    return choicesHTML
}