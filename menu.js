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

   // Second column, Base and Size
   let pizzaCol2 = document.createElement("div")
   pizzaCol2.className = "columns"
   let pizzaBase = document.createElement("select")
   pizzaBase.className = "base"
   pizzaCol2.appendChild(pizzaBase)
   let pizzaSize = document.createElement("select")
   pizzaSize.className = "size"
   pizzaCol2.appendChild(pizzaSize)
   pizzaPanel.appendChild(pizzaCol2)

   // Description, Quantity, and Button
   let pizzaDesc = document.createElement("p")
   pizzaDesc.className = "desc"
   pizzaDesc.textContent = "Placeholder"
   pizzaPanel.appendChild(pizzaDesc)
   let pizzaQuantity = document.createElement("select")
   pizzaPanel.appendChild(pizzaQuantity)
   let pizzaButton = document.createElement("button")
   pizzaButton.textContent = "Add to Cart"
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