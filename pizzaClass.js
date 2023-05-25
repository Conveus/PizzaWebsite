export class PizzaMaker{
    constructor(){}

    addPizza(location, pizzaOb) {
        // Creates item panel and image
        let itemPanel = document.createElement("div")
        itemPanel.className = "item"
        let itemImage = document.createElement("img")
        itemImage.src = pizzaOb.image
        itemImage.alt = pizzaOb.image
        itemPanel.appendChild(itemImage)
     
        // First column, Title and Price
        let itemCol1 = document.createElement("div")
        itemCol1.className = "columns"
        let itemTitle = document.createElement("div")
        itemTitle.className = "title"
        itemTitle.textContent = pizzaOb.name
        itemCol1.appendChild(itemTitle)
        let itemPrice = document.createElement("div")
        itemPrice.className = "price"
        itemPrice.textContent = pizzaOb.price
        itemCol1.appendChild(itemPrice)
        itemPanel.appendChild(itemCol1)
     
        // Second column
        let itemCol2 = document.createElement("div")
        itemCol2.className = "columns"
        // Base options
        let pizzaBase = document.createElement("select")
        pizzaBase.className = "base"
        pizzaBase.name = "base"
        pizzaBase.id = "base"
        pizzaOb.bases.forEach(function(base, index) {
             let baseOp = document.createElement("option")
             baseOp.value = index
             baseOp.text = base
             pizzaBase.add(baseOp)
        })
        itemCol2.appendChild(pizzaBase)
        // Size options
        let pizzaSize = document.createElement("select")
        pizzaSize.className = "size"
        pizzaSize.name = "size"
        pizzaSize.id = "size"
        pizzaOb.sizes.forEach(function(size, index) {
             let sizeOp = document.createElement("option")
             sizeOp.value = index
             sizeOp.text = size
             if(index==1){sizeOp.selected=true}
             pizzaSize.add(sizeOp)
         })
        itemCol2.appendChild(pizzaSize)
        itemPanel.appendChild(itemCol2)
     
        // Description, Quantity, and Button
        let itemDesc = document.createElement("p")
        itemDesc.className = "desc"
        itemDesc.textContent = pizzaOb.desc
        itemPanel.appendChild(itemDesc)
        let itemQuantity = document.createElement("select")
        itemQuantity.name = "quantity"
        itemQuantity.id = "quantity"
        itemQuantity.className = "quantity"
        for (let i = 1; i<=10; i++) {
             let quantityOp = document.createElement("option")
             quantityOp.value = i
             quantityOp.text = i
             itemQuantity.add(quantityOp,null)
        }
        itemPanel.appendChild(itemQuantity)
        let itemButton = document.createElement("button")
        itemButton.textContent = "Add to Cart"
        itemButton.dataset.order = "pizza"
        itemPanel.appendChild(itemButton)
     
        // Attaches panel to section
        location.appendChild(itemPanel)
    }
}