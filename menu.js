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
   let itemPanel = document.createElement("div")
   itemPanel.className = "item"
   let itemImage = document.createElement("img")
   itemImage.src = pizzaArray[index].image
   itemImage.alt = "Image"
   itemPanel.appendChild(itemImage)

   // First column, Title and Price
   let itemCol1 = document.createElement("div")
   itemCol1.className = "columns"
   let itemTitle = document.createElement("div")
   itemTitle.className = "title"
   itemTitle.textContent = pizzaArray[index].name
   itemCol1.appendChild(itemTitle)
   let itemPrice = document.createElement("div")
   itemPrice.className = "price"
   itemPrice.textContent = pizzaArray[index].price
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
   pizzaArray[index].bases.forEach(function(base, index){
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
   pizzaArray[index].sizes.forEach(function(size, index){
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
   itemDesc.textContent = pizzaArray[index].desc
   itemPanel.appendChild(itemDesc)
   let itemQuantity = document.createElement("select")
   itemQuantity.name = "quantity"
   itemQuantity.id = "quantity"
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
   pizzaSection.appendChild(itemPanel)
   
})

veganArray.forEach(function(veganItem, index){
    
})

glutenArray.forEach(function(glutenItem, index){
    
})

sideArray.forEach(function(sideItem, index){

   // Creates item panel and image
   let itemPanel = document.createElement("div")
   itemPanel.className = "item"
   let itemImage = document.createElement("img")
   itemImage.src = sideArray[index].image
   itemImage.alt = "Image"
   itemPanel.appendChild(itemImage)

   // First column, Title and Price
   let itemCol1 = document.createElement("div")
   itemCol1.className = "columns"
   let itemTitle = document.createElement("div")
   itemTitle.className = "title"
   itemTitle.textContent = sideArray[index].name
   itemCol1.appendChild(itemTitle)
   let itemPrice = document.createElement("div")
   itemPrice.className = "price"
   itemPrice.textContent = sideArray[index].price
   itemCol1.appendChild(itemPrice)
   itemPanel.appendChild(itemCol1)

   // Description, Quantity, and Button
   let itemDesc = document.createElement("p")
   itemDesc.className = "desc"
   itemDesc.textContent = sideArray[index].desc
   itemPanel.appendChild(itemDesc)
   let itemQuantity = document.createElement("select")
   itemQuantity.name = "quantity"
   itemQuantity.id = "quantity"
   for (let i = 1; i<=10; i++) {
        let quantityOp = document.createElement("option")
        quantityOp.value = i
        quantityOp.text = i
        itemQuantity.add(quantityOp,null)
   }
   itemPanel.appendChild(itemQuantity)
   let itemButton = document.createElement("button")
   itemButton.textContent = "Add to Cart"
   itemButton.dataset.order = "side"
   itemPanel.appendChild(itemButton)

   // Attaches panel to section
   sideSection.appendChild(itemPanel)

})

drinkArray.forEach(function(drinkItem, index){

     // Creates item panel and image
   let itemPanel = document.createElement("div")
   itemPanel.className = "item"
   let itemImage = document.createElement("img")
   itemImage.src = drinkArray[index].image
   itemImage.alt = "Image"
   itemPanel.appendChild(itemImage)

   // First column, Title and Price
   let itemCol1 = document.createElement("div")
   itemCol1.className = "columns"
   let itemTitle = document.createElement("div")
   itemTitle.className = "title"
   itemTitle.textContent = drinkArray[index].name
   itemCol1.appendChild(itemTitle)
   let itemPrice = document.createElement("div")
   itemPrice.className = "price"
   itemPrice.textContent = drinkArray[index].price
   itemCol1.appendChild(itemPrice)
   itemPanel.appendChild(itemCol1)

     let itemQuantity = document.createElement("select")
     itemQuantity.name = "quantity"
     itemQuantity.id = "quantity"
     for (let i = 1; i<=10; i++) {
          let quantityOp = document.createElement("option")
          quantityOp.value = i
          quantityOp.text = i
          itemQuantity.add(quantityOp,null)
     }
     itemPanel.appendChild(itemQuantity)
     let itemButton = document.createElement("button")
     itemButton.textContent = "Add to Cart"
     itemButton.dataset.order = "side"
     itemPanel.appendChild(itemButton)
  
     // Attaches panel to section
     drinkSection.appendChild(itemPanel)
})