import { saveOrderSubmission } from "./TransientState.js"

const handleOrderSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "submitOrder") {
        saveOrderSubmission()
    }
}

export const submitOrder = () => {
    document.addEventListener("click", handleOrderSubmissionClick)

    return "<div><button id='submitOrder'>Submit Order </button></div>"
}