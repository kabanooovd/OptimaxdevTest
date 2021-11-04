import {cartsReducer, CartsReducerTypes, removeInstance} from "../cartsReducer";


test('Item have to be removed from CART', () => {
    const initState: CartsReducerTypes = {
        cartData: [
            {
                category: "men's clothing",
                description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                id: 1,
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                price: 109.95,
                rating: {rate: 3.9, count: 120},
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                quantity: 3,
                rmFlag: false
            },
            {
                category: "men's clothing",
                description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                id: 2,
                image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                price: 22.3,
                rating: {rate: 4.1, count: 120},
                title: "Mens Casual Premium Slim Fit T-Shirts ",
                quantity: 3,
                rmFlag: false
            }
        ],
        cartItemsQuantity: 0
    }
    const action = removeInstance(initState.cartData[0].id)
    const finalState = cartsReducer(initState, action)
    expect(finalState.cartData.length).toBe(initState.cartData.length - 1);
})