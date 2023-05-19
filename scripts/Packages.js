import { setPackageChoice } from "./TransientState.js"

const handlePackageChoice = (changeEvent) => {
    if (changeEvent.target.id === "package") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setPackageChoice(convertedToInteger)
    }
}

export const PackageOptions = async () => {

    document.addEventListener("change", handlePackageChoice)

    const response = await fetch("http://localhost:8088/packages")
    const packages = await response.json()

    let choicesHTML = `<select id="package"> <option value="0">Select a technology package</option>`

    const divStringArray = packages.map(
        (pkg) => {
            return `
                <option value='${pkg.id}'> ${pkg.package}</option>`
        }
    )

    // This function needs to return a single string, not an array of strings
    choicesHTML += divStringArray.join("")
    choicesHTML += "</select>"

    return choicesHTML
}