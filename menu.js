// Getting json file
import data from './items.json' assert {type: 'json'}
import { PizzaMaker } from './pizzaClass.js' //assert {type: 'javascript'}

// Setting constant arrays for menu options
const pizzaArray = data.pizzas
const veganArray = data.vegans
const glutenArray = data.gfree
const sideArray = data.sides
const drinkArray = data.drinks

// Setting up basket
const basket = []
let numItems = 0;

window.addEventListener("DOMContentLoaded", function(e)
{
     // Setting constants for sections
     const pizzaSection = document.getElementById("pizza")
     const veganSection = document.getElementById("vegan")
     const glutenSection = document.getElementById("gluten-free")
     const sideSection = document.getElementById("sides")
     const drinkSection = document.getElementById("drinks")


     pizzaArray.forEach(function(pizzaItem, index){
          let pizzaOp = new PizzaMaker()
          pizzaOp.addPizza(pizzaSection, pizzaItem)
     })

     veganArray.forEach(function(veganItem, index){
          let veganOp = new PizzaMaker()
          veganOp.addPizza(veganSection, veganItem)
     })

     glutenArray.forEach(function(glutenItem, index){
          let glutenOp = new PizzaMaker()
          glutenOp.addPizza(glutenSection, glutenItem)
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

     // Create array of all item buttons
     const itemButtons = this.document.querySelectorAll("button[data-order]")
     itemButtons.forEach(function(button)
     {
          // When button is clicked
          button.addEventListener("click", function(e)
          {
               // Get buttons item
               const button = e.currentTarget
               const container = button.parentNode;

               // Add item info to basket
               basket[numItems] = {
                    id: button.getAttribute("data-order"),
                    title: container.querySelector(".title").innerText,
                    price: container.querySelector(".price").innerText,
                    base: container.querySelector(".base").options[container.querySelector(".base").selectedIndex].text,
                    size: container.querySelector(".size").options[container.querySelector(".size").selectedIndex].text,
                    desc: container.querySelector(".desc").innerText,
                    //quantity: container.querySelector(".quantity").options[container.querySelector(".quantity").selectedIndex].text,
               }
               // Increment numItems in basket
               numItems++

               console.log(basket)
               console.log(numItems)

               localStorage.setItem("basket", JSON.stringify(basket))
          })
     })
})

