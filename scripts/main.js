import { InteriorOptions } from "./Interiors.js"
import { PaintOptions } from "./Paints.js"
import { TechOptions } from "./Techs.js"
import { WheelOptions } from "./Wheels.js"

const render = async () => {
    const paintOptionsHTML = await PaintOptions()
    const interiorOptionsHTML = await InteriorOptions()
    const wheelOptionsHTML = await WheelOptions()
    const techOptionsHTML = await TechOptions()

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

            <section class="choices__wheel options">
                <h2>Wheels</h2>
                ${wheelOptionsHTML}
            </section>
            <section class="choices__tech options">
                <h2>Technologies</h2>
                ${techOptionsHTML}
            </section>
        </article>

        <article class="order">

        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>

        </article>
    `

    container.innerHTML = composedHTML
}


render()