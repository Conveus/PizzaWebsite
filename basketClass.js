export class BasketAdder{
    constructor(){}

    addItem(basket, index, container) {
        if(container.querySelector(".base")) {
            basket[index] = 
            {
                 imageSrc: container.querySelector("img").alt,
                 title: container.querySelector(".title").innerText,
                 price: container.querySelector(".price").innerText,
                 base: container.querySelector(".base").options[container.querySelector(".base").selectedIndex].text,
                 size: container.querySelector(".size").options[container.querySelector(".size").selectedIndex].text,
                 quantity: container.querySelector(".quantity").options[container.querySelector(".quantity").selectedIndex].text,
            }
       } else if (container.querySelector(".topping1")) {
            basket[index] = 
            {
                 imageSrc: container.querySelector("img").alt,
                 title: container.querySelector(".title").innerText,
                 price: container.querySelector(".price").innerText,
                 base: container.querySelector(".base").options[container.querySelector(".base").selectedIndex].text,
                 size: container.querySelector(".size").options[container.querySelector(".size").selectedIndex].text,
                 topping1: container.querySelector(".topping1").options[container.querySelector(".topping1").selectedIndex].text,
                 topping2: container.querySelector(".topping2").options[container.querySelector(".topping2").selectedIndex].text,
                 quantity: container.querySelector(".quantity").options[container.querySelector(".quantity").selectedIndex].text,
            }
       } else {
            basket[index] = 
            {
                 imageSrc: container.querySelector("img").alt,
                 title: container.querySelector(".title").innerText,
                 price: container.querySelector(".price").innerText,
                 quantity: container.querySelector(".quantity").options[container.querySelector(".quantity").selectedIndex].text,
            }
       }
    }
}