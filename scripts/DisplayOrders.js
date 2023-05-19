export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=package&_expand=wheel&_expand=interior&_expand=paint")
    const orders = await fetchResponse.json()

    let ordersHTML = ""
    const ordersArray = orders.map(
        (order) => {

            const orderTotal = order.package.price + order.wheel.price + order.interior.price + order.paint.price

            return `<section class="orders">
                <div>Order #${order.id} costs ${orderTotal.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}
                </div>
            
        </section>`

        }
    )
    ordersHTML += ordersArray.join("")
    // ordersHTML += orders.reduce(
    //     (prev, order) => {
    //         prev += order.package.price + order.wheel.price + order.interior.price + order.paint.price
    //         return prev
    //     }, 0
    // ).toLocaleString("en-US", {
    //     style: "currency",
    //     currency: "USD"
    // })

    return ordersHTML
}