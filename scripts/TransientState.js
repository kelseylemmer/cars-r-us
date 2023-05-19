// Set up the transient state data structure and provide initial valuess
const transientState = {
    "paintId": 0,
    "interiorId": 0,
    "techId": 0,
    "wheelId": 0
}

// Functions to modify each property of transient state
export const setPaintChoice = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setInteriorChoice = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setTechChoice = (chosenTech) => {
    transientState.techId = chosenTech
    console.log(transientState)
}

export const setWheelChoice = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}

