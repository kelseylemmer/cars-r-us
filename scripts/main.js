import { Orders } from "./DisplayOrders.js"
import { InteriorOptions } from "./Interiors.js"
import { PaintOptions } from "./Paints.js"
import { submitOrder } from "./SubmitOrders.js"
import { PackageOptions } from "./Packages.js"
import { WheelOptions } from "./Wheels.js"


const render = async () => {
    const paintOptionsHTML = await PaintOptions()
    const interiorOptionsHTML = await InteriorOptions()
    const wheelOptionsHTML = await WheelOptions()
    const packageOptionsHTML = await PackageOptions()
    const buttonHTML = await submitOrder()
    const ordersListHTML = await Orders()

    const composedHTML = `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Paints</h2>
                ${paintOptionsHTML}
            </section>

            <section class="choices__interior options">
                <h2>Interior</h2>
                ${interiorOptionsHTML}
            </section>

            <section class="choices__package options">
                <h2>Technologies</h2>
                ${packageOptionsHTML}
            </section>

            <section class="choices__wheel options">
                <h2>Wheels</h2>
                ${wheelOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${buttonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${ordersListHTML}

        </article>
    `

    container.innerHTML = composedHTML
}
document.addEventListener("newOrderCreated", render)

render()