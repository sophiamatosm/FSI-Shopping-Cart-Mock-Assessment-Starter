let totalQuantity = 1

// reference text 
let quantityText = document.querySelector(".total-quantity")

//refrence buttons
let downButton = document.querySelector("#quantity-down")
let upButton = document.querySelector("#quantity-up")


// function 
downButton.addEventListener("click", function(){
    //window.alert("down button clicked")
    if (totalQuantity > 0){
        totalQuantity = totalQuantity - 1
        quantityText.textContent = "Quantity: "+ totalQuantity
    }
})

upButton.addEventListener("click", function(){
    //window.alert("up button clicked")
    totalQuantity = totalQuantity + 1

    quantityText.textContent = "Quantity: "+ totalQuantity


})


