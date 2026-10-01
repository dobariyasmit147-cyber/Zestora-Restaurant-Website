// ===============================
// ORDER FORM
// ===============================

const orderForm = document.getElementById("orderForm");

if (orderForm) {

    const food = document.getElementById("food");
    const quantity = document.getElementById("quantity");
    const total = document.getElementById("total");

    function calculateTotal() {

        let price = 0;

        if (food.value === "Margherita Pizza") {
            price = 199;
        } 
        else if (food.value === "Classic Burger") {
            price = 149;
        } 
        else if (food.value === "Creamy Pasta") {
            price = 179;
        } 
        else if (food.value === "French Fries") {
            price = 99;
        } 
        else if (food.value === "Cheese Sandwich") {
            price = 129;
        } 
        else if (food.value === "Chocolate Cake") {
            price = 149;
        }

        let qty = Number(quantity.value);

        if (qty < 1) {
            qty = 1;
        }

        total.innerText = price * qty;
    }


    // Food select karta total calculate thase
    food.addEventListener("change", calculateTotal);

    // Quantity change karta total calculate thase
    quantity.addEventListener("input", calculateTotal);


    // Place Order
    orderForm.addEventListener("submit", function(event) {

        event.preventDefault();

        calculateTotal();

        const name = document.getElementById("customerName").value;

        alert(
            "Thank you, " + name + "! 😊\n\n" +
            "Your order has been placed successfully! 🍽️\n\n" +
            "Total Amount: ₹" + total.innerText + "\n\n" +
            "Zestora Restaurant"
        );

        orderForm.reset();

        total.innerText = "0";
    });
}


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for contacting Zestora! 😊\n\n" +
            "We will get back to you soon."
        );

        contactForm.reset();
    });
}