let addProduct = JSON.parse(localStorage.getItem('productStorage'));

const showBasket = async () => {
    if (addProduct) {
        await addProduct;
        console.log(addProduct);
    }
}

showBasket();