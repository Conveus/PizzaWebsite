// Getting json file
import data from './items.json' assert {type: 'json'}

// Setting constants for sections
const pizzaSection = document.getElementById("pizza")
const veganSection = document.getElementById("vegan")
const glutenSection = document.getElementById("glueten-free")
const sideSection = document.getElementById("sides")
const drinkSection = document.getElementById("drinks")
// Setting constant arrays for menu options
const pizzaArray = data.pizzas
const veganArray = data.vegans
const glutenArray = data.gfree
const sideArray = data.sides
const drinkArray = data.drinks

pizzaArray.forEach(function(pizzaItem, index){

    // Creates item panel and image
   let pizzaPanel = document.createElement("div")
   pizzaPanel.className = "item"
   let pizzaImage = document.createElement("img")
   pizzaImage.src = pizzaArray[index].image
   pizzaImage.alt = "Image"
   pizzaPanel.appendChild(pizzaImage)

   // First column, Title and Price
   let pizzaCol1 = document.createElement("div")
   pizzaCol1.className = "columns"
   let pizzaTitle = document.createElement("div")
   pizzaTitle.className = "title"
   pizzaTitle.textContent = pizzaArray[index].name
   pizzaCol1.appendChild(pizzaTitle)
   let pizzaPrice = document.createElement("div")
   pizzaPrice.className = "price"
   pizzaPrice.textContent = pizzaArray[index].price
   pizzaCol1.appendChild(pizzaPrice)
   pizzaPanel.appendChild(pizzaCol1)

   // Second column
   let pizzaCol2 = document.createElement("div")
   pizzaCol2.className = "columns"
   // Base options
   let pizzaBase = document.createElement("select")
   pizzaBase.className = "base"
   pizzaBase.name = "base"
   pizzaBase.id = "base"
   pizzaArray[index].bases.forEach(function(base, index){
        let baseOp = document.createElement("option")
        baseOp.value = index
        baseOp.text = base
        pizzaBase.add(baseOp)
   })
   pizzaCol2.appendChild(pizzaBase)
   // Size options
   let pizzaSize = document.createElement("select")
   pizzaSize.className = "size"
   pizzaSize.name = "size"
   pizzaSize.id = "size"
   pizzaArray[index].sizes.forEach(function(size, index){
        let sizeOp = document.createElement("option")
        sizeOp.value = index
        sizeOp.text = size
        if(index==1){sizeOp.selected=true}
        pizzaSize.add(sizeOp)
    })
   pizzaCol2.appendChild(pizzaSize)
   pizzaPanel.appendChild(pizzaCol2)

   // Description, Quantity, and Button
   let pizzaDesc = document.createElement("p")
   pizzaDesc.className = "desc"
   pizzaDesc.textContent = pizzaArray[index].desc
   pizzaPanel.appendChild(pizzaDesc)
   let pizzaQuantity = document.createElement("select")
   pizzaQuantity.name = "quantity"
   pizzaQuantity.id = "quantity"
   for (let i = 1; i<=10; i++) {
        let quantityOp = document.createElement("option")
        quantityOp.value = i
        quantityOp.text = i
        pizzaQuantity.add(quantityOp,null)
   }
   pizzaPanel.appendChild(pizzaQuantity)
   let pizzaButton = document.createElement("button")
   pizzaButton.textContent = "Add to Cart"
   pizzaButton.dataset.order = "pizza"
   pizzaPanel.appendChild(pizzaButton)

   // Attaches panel to section
   pizzaSection.appendChild(pizzaPanel)
   
})

veganArray.forEach(function(veganItem, index){
    
})

glutenArray.forEach(function(glutenItem, index){
    
})

sideArray.forEach(function(sideItem, index){

   // Creates item panel and image
   let pizzaPanel = document.createElement("div")
   pizzaPanel.className = "item"
   let pizzaImage = document.createElement("img")
   pizzaImage.src = sideArray[index].image
   pizzaPanel.appendChild(pizzaImage)

   // First column, Title and Price
   let pizzaCol1 = document.createElement("div")
   pizzaCol1.className = "columns"
   let pizzaTitle = document.createElement("div")
   pizzaTitle.className = "title"
   pizzaTitle.textContent = sideArray[index].name
   pizzaCol1.appendChild(pizzaTitle)
   let pizzaPrice = document.createElement("div")
   pizzaPrice.className = "price"
   pizzaPrice.textContent = sideArray[index].price
   pizzaCol1.appendChild(pizzaPrice)
   pizzaPanel.appendChild(pizzaCol1)

   // Description, Quantity, and Button
   let pizzaDesc = document.createElement("p")
   pizzaDesc.className = "desc"
   pizzaDesc.textContent = sideArray[index].desc
   pizzaPanel.appendChild(pizzaDesc)
   let pizzaQuantity = document.createElement("select")
   pizzaQuantity.name = "quantity"
   pizzaQuantity.id = "quantity"
   for (let i = 1; i<=10; i++) {
        let quantityOp = document.createElement("option")
        quantityOp.value = i
        quantityOp.text = i
        pizzaQuantity.add(quantityOp,null)
   }
   pizzaPanel.appendChild(pizzaQuantity)
   let pizzaButton = document.createElement("button")
   pizzaButton.textContent = "Add to Cart"
   pizzaButton.dataset.order = "side"
   pizzaPanel.appendChild(pizzaButton)

   // Attaches panel to section
   sideSection.appendChild(pizzaPanel)

})

drinkArray.forEach(function(drinkItem, index){
    
})