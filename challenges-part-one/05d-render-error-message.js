// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let FirstName = "Eric"
const purchaseBtn = document.getElementById("purchase-btn")
const purchaseBtnError = document.getElementById("purchase-btn-error")

purchaseBtn.addEventListener("click", errorMessage)

function errorMessage() {
    purchaseBtnError.innerHTML = `Sorry ${FirstName},  something went wrong. Please try again.`
}