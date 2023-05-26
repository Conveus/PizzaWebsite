
window.addEventListener("DOMContentLoaded", function(e) {
    const basketSection = document.getElementById("basket")
    const basket = this.localStorage.getItem("basket")
    let numItems = this.localStorage.getItem("numItems")

    if(basket) {
        const order = JSON.parse(basket)

        order.forEach(function(orderItem, index) {

            if(orderItem.imageSrc != null) {
                // Creates item panel and image
                let orderPanel = document.createElement("div")
                orderPanel.className = "item"
                let orderImage = document.createElement("img")
                orderImage.src = orderItem.imageSrc
                orderImage.alt = "Image"
                orderPanel.appendChild(orderImage)

                // First column, Title and Price
                let orderCol1 = document.createElement("div")
                orderCol1.className = "columns"
                let orderTitle = document.createElement("div")
                orderTitle.className = "title"
                orderTitle.textContent = orderItem.title
                orderCol1.appendChild(orderTitle)
                let orderPrice = document.createElement("div")
                orderPrice.className = "price"
                orderPrice.textContent = orderItem.price
                orderCol1.appendChild(orderPrice)
                orderPanel.appendChild(orderCol1)

                if(orderItem.base) {
                    // Second column
                    let orderCol2 = document.createElement("div")
                    orderCol2.className = "columns"
                    // Base options
                    let orderBase = document.createElement("div")
                    orderBase.className = "base"
                    orderBase.textContent = "Base: " + orderItem.base
                    orderCol2.appendChild(orderBase)
                    // Size options
                    let orderSize = document.createElement("div")
                    orderSize.className = "size"
                    orderSize.textContent = "Size: " + orderItem.size
                    orderCol2.appendChild(orderSize)
                    orderPanel.appendChild(orderCol2)
                }

                let orderQuantity = document.createElement("div")
                orderQuantity.className = "quantity"
                orderQuantity.textContent = "Quantity: " + orderItem.quantity
                orderPanel.appendChild(orderQuantity)

                let itemButton = document.createElement("button")
                itemButton.textContent = "Remove"
                itemButton.dataset.order = "remmove"
                orderPanel.appendChild(itemButton)

                basketSection.appendChild(orderPanel)
            }
            
        })

       // Create array of all item buttons
        const itemButtons = document.querySelectorAll("button[data-order]")
        for (let i = 0; i < itemButtons.length; i++) {
            // When button is clicked
            itemButtons[i].addEventListener("click", function(e) {
                
                order.splice(i, 1)
                console.log(order)

                // Get buttons item and remove parent
                itemButtons[i].parentNode.remove()

                localStorage.setItem("basket", JSON.stringify(order))
                //console.log(basket)
            })
        }
    }

    
})