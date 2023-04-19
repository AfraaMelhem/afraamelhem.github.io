$(document).ready(function () {
    // Get the product details from the local storage
    const productName = localStorage.getItem('productName');
    const productImage = localStorage.getItem('productImage');
    const productDescription = localStorage.getItem('productDescription');
    const productPrice = localStorage.getItem('productPrice');

    
    console.log("Ssss", productName, productImage, productDescription, productPrice);

    // Display the product details on the page
    document.querySelector('.product-name').textContent = productName;
    document.querySelector('.product-image').src = productImage;
    document.querySelector('.product-description').textContent = productDescription;
    document.querySelector('.product-price').textContent = `$${productPrice}`;

});