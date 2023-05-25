
window.addEventListener("DOMContentLoaded", function(e) {
    const basketSection = this.document.getElementById("basket")
    const basket = this.localStorage.getItem("basket")

    if(basket) {
        //const order = JSON.parse(basket)

        basket.foreach(function(item, index){

            // NEED TO ALTER SO IT CAN DISPLAY ANY ITEM PROPERLY
            // MAYBE ADD ID TO BASKET AND CHANGE OPERATIONS USING IF/SWITCH
            
            // Creates item panel and image
            let itemPanel = document.createElement("div")
            itemPanel.className = "item"
            let itemImage = document.createElement("img")
            itemImage.src = item[index].itemImg
            itemImage.alt = "Image"
            itemPanel.appendChild(itemImage)


        })
    }
})