export const PaintOptions = async () => {

    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    let choicesHTML = `<select id="paint"> <option value="0">Select a color</option>`

    const divStringArray = paints.map(
        (paint) => {
            return `
                <option value='${paint.id}'> ${paint.color}</option>`
        }
    )

    // This function needs to return a single string, not an array of strings
    choicesHTML += divStringArray.join("")
    choicesHTML += "</select>"

    return choicesHTML
}