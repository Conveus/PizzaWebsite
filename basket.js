window.addEventListener("DOMContentLoaded", function(e) {
    const basket = this.localStorage.getItem("basket")

    if(basket) {
        //const order = JSON.parse(basket)

        basket.foreach(function(item, index){
            
        })
    }
})