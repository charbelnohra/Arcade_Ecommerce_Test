var modal = document.getElementById('myModal');
var img = document.querySelectorAll("img.item");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var cartCount = 0;

for(let i = 0; i < img.length; i++) {
    img[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt + '<button id="remove">-</button><button id="add">+</button>';
        document.getElementById("add").addEventListener("click", function() {
            cartCount++;
            updateCartCount();
        });
        document.getElementById("remove").addEventListener("click", function() {
            if (cartCount > 0) { // Prevent the count from going below 0
                cartCount--;
                updateCartCount();
            }
        });
    }
}
function updateCartCount() {
    // Update the cart count on the page
    document.getElementById("cartCount").textContent = cartCount;
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}
function updateCartCount() {
    // Update the cart count on the page
    document.getElementById("cartCount").textContent = cartCount;
}