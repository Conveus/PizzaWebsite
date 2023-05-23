// Setting constants for sections
const pizzaSection = document.getElementById("pizza")
const veganSection = document.getElementById("vegan")
const glutenSection = document.getElementById("glueten-free")
const sidesSection = document.getElementById("sides")
const drinksSection = document.getElementById("drinks")
// Setting constant arrays for menu options
const pizzaArray = ["original", "pepperoni", "meat", "chicken", "bbq", "spicy", "vegi", "spicy-vegi", "hawaiian", "tuna"]
const veganArray = ["vegan-original", "vegan-pepperoni", "vegan-vegi"]
const glutenArray = ["gf-original", "gf-pepperoni", "gf-vegi"]
const sidesArray = ["garlic-bread", "cheesy-garlic-bread", "chicken-wings", "salad", "coleslaw"]
const drinksArray = ["coke", "diet-coke", "dr-pepper", "fanta", "sprite"]

pizzaArray.forEach(function(pizzaItem, index){

    // Creates item panel and image
   let pizzaPanel = document.createElement("div")
   pizzaPanel.className = "item"
   let pizzaImage = document.createElement("img")
   pizzaPanel.appendChild(pizzaImage)

   // First column, Title and Price
   let pizzaCol1 = document.createElement("div")
   pizzaCol1.className = "columns"
   let pizzaTitle = document.createElement("div")
   pizzaTitle.className = "title"
   pizzaTitle.textContent = "Name"
   pizzaCol1.appendChild(pizzaTitle)
   let pizzaPrice = document.createElement("div")
   pizzaPrice.className = "price"
   pizzaPrice.textContent = "Price"
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
   let baseOp1 = document.createElement("option")
   baseOp1.value = "1"
   baseOp1.text = "[Select Base]"
   let baseOp2 = document.createElement("option")
   baseOp2.value = "2"
   baseOp2.text = "Thin Italian"
   let baseOp3 = document.createElement("option")
   baseOp3.value = "3"
   baseOp3.text = "Stone Crust"
   let baseOp4 = document.createElement("option")
   baseOp4.value = "4"
   baseOp4.text = "Cheese Stuffed Crust"
   let baseOp5 = document.createElement("option")
   baseOp5.value = "5"
   baseOp5.text = "Vegan"
   let baseOp6 = document.createElement("option")
   baseOp6.value = "6"
   baseOp6.text = "Gluten Free"
   pizzaBase.add(baseOp1,null)
   pizzaBase.add(baseOp2,null)
   pizzaBase.add(baseOp3,null)
   pizzaBase.add(baseOp4,null)
   pizzaBase.add(baseOp5,null)
   pizzaBase.add(baseOp6,null)
   pizzaCol2.appendChild(pizzaBase)
   // Size options
   let pizzaSize = document.createElement("select")
   pizzaSize.className = "size"
   pizzaSize.name = "size"
   pizzaSize.id = "size"
   let SizeOp1 = document.createElement("option")
   SizeOp1.value = "1"
   SizeOp1.text = 'Small - 8"'
   let SizeOp2 = document.createElement("option")
   SizeOp2.value = "2"
   SizeOp2.text = 'Medium - 12"'
   SizeOp2.selected = true
   let SizeOp3 = document.createElement("option")
   SizeOp3.value = "3"
   SizeOp3.text = 'Large - 16"'
   let SizeOp4 = document.createElement("option")
   SizeOp4.value = "4"
   SizeOp4.text = 'Pizzanourmous - 20"'
   pizzaSize.add(SizeOp1,null)
   pizzaSize.add(SizeOp2,null)
   pizzaSize.add(SizeOp3,null)
   pizzaSize.add(SizeOp4,null)
   pizzaCol2.appendChild(pizzaSize)
   pizzaPanel.appendChild(pizzaCol2)

   // Description, Quantity, and Button
   let pizzaDesc = document.createElement("p")
   pizzaDesc.className = "desc"
   pizzaDesc.textContent = "Placeholder"
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
   pizzaButton.dataset.order = pizzaItem
   pizzaPanel.appendChild(pizzaButton)

   // Attaches panel to section
   pizzaSection.appendChild(pizzaPanel)
   
})

veganArray.forEach(function(veganItem, index){
    
})

glutenArray.forEach(function(glutenItem, index){
    
})

sidesArray.forEach(function(sideItem, index){
    
})

drinksArray.forEach(function(drinkItem, index){
    
})