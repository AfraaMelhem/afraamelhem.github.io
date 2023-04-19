
$(document).ready(function () {

  $('.add-to-cart-btn').click(function () {
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    addItemToCart(name, price, 1);
    displayCart();
  });

  $('.clearCart').click(function () {
    cart = []
    localStorage.clear("shoppingCart");

    displayCart();
  });

  $('.cart-submit').click(function () {
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    var quantity = Number($(this).siblings('.quantity').find('.qty-text').val());
    addItemToCart(name, price, quantity);
    displayCart();
  });

  function displayCartTable() {
    var cartItems = listCart();
    var cartTable = document.querySelector('.cart-table tbody');
    if (cartTable) {

      while (cartTable?.firstChild) {
        cartTable.removeChild(cartTable.firstChild);
      }

      // console.log("cartItems", cartItems);
      
      cartItems.forEach(function (item) {
        var row = document.createElement('tr');
        row.innerHTML = '<td class="cart_product_img d-flex align-items-center"><h6>' + item.name + '</h6></td>' +
          '<td class="price"><span>$' + item.price.toFixed(2) + '</span></td>' +
          '<td class="qty"><span>' + item.count + '</span></td>' +
          '<td class="total_price"><span>$' + (item.price * item.count).toFixed(2) + '</span></td>';
        cartTable.appendChild(row);
      });
      var subtotalElement = document.querySelector('.cart-total-chart li:first-child span:last-child');
      var totalElement = document.querySelector('.cart-total-chart li:last-child span:last-child');

      var total = calculateTotal();
      subtotalElement.innerHTML = '$' + total.toFixed(2);
      totalElement.innerHTML = '$' + total.toFixed(2);
    }


    var subtotalCheckoutElement = document.querySelector('.order-details-form li:first-child span:last-child');
    var totalCheckoutElement = document.querySelector('.order-details-form li:last-child span:last-child');
    var total = calculateTotal();
    if (subtotalCheckoutElement) {
      subtotalCheckoutElement.innerHTML = '$' + total.toFixed(2);
      totalCheckoutElement.innerHTML = '$' + total.toFixed(2);
    }

  }

  function calculateTotal() {
    var cartItems = listCart();
    var total = 0;
    cartItems.forEach(function (item) {
      total += item.price * item.count;
    });
    return total;
  }

  function displayCart() {
    var cartArray = listCart();
    var cartCount = 0;
    for (var i in cartArray) {
      cartCount += cartArray[i].count;
    }
    $('.cart_quantity').text(cartCount);
    displayCartTable()
  }

  function addItemToCart(name, price, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count += count;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  }

  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  function listCart() {
    var cartCopy = [];
    for (var i in cart) {
      var item = cart[i];
      var itemCopy = {};
      for (var prop in item) {
        itemCopy[prop] = item[prop];
      }
      cartCopy.push(itemCopy);
    }
    return cartCopy;
  }

  var cart = [];

  function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }

  function loadCart() {
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
    if (cart === null) {
      cart = [];
    }
  }

  loadCart();
  displayCart();

  // Product Information
  productInfo = {
    name: localStorage.getItem('productName'),
    image: localStorage.getItem('productImage'),
    description: localStorage.getItem('productDescription'),
    price: localStorage.getItem('productPrice')
  }

  $('button[name="addtocart"]').attr('data-name', productInfo.name);
  $('button[name="addtocart"]').attr('data-price', productInfo.price);
});
