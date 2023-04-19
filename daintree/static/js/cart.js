
let updateBtns = document.getElementsByClassName('update-cart')

for (let i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function() {
        let productID = this.dataset.product
        let action = this.dataset.action

        console.log('productID : ', productID, '   action : ', action)

        console.log('User : ', user)

        if(user === 'AnonymousUser') {
            addCookieItem(productID, action)
        }else {
            updateUserOrder(productID, action)
        }
    })
}


function addCookieItem(productID, action) {
    console.log('User is not authenticated');

    if (action == 'add'){
        if (cart[productID] == undefined) {
            cart[productID] = {'quantity':1}
        } else {
            cart[productID]['quantity'] += 1
        }
    }

    if (action == 'remove') {
        cart[productID]['quantity'] -= 1

        if ( cart[productID]['quantity'] <= 0 ) {
            console.log('remove item');
            delete cart[productID]
        }
    }

    console.log('cart : ', cart)
    document.cookie = 'cart=' + JSON.stringify(cart) + ';domain=;path=/'
    location.reload()
}


function updateUserOrder(productID, action) {
    console.log('User logged in. sending data ...... ')

    let url = '/update_item/'

    fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({'productID':productID, 'action':action})
    })

    .then((response) => {
        return response.json()
    })

    .then((data) => {
        console.log('data :', data)
        location.reload()
    })
}