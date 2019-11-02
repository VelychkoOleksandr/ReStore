const updateShoppingCart = (state, action) => {

    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        };
    }

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateCart(state, action.payload);

        case 'INCREASE_AMOUNT':
            return increaseAmount(state, action.payload);

        case 'DECREASE_AMOUNT':
            return decreaseAmount(state, action.payload);

        case 'REMOVE_ITEM_FROM_CART':
            const bookId = action.payload;
            return {
                ...state.shoppingCart,
                cartItems: state.shoppingCart.cartItems.filter(({ id }) => id !== bookId)
            }
        
        case 'CALCULATE_TOTAL':
            const orderTotal = state.shoppingCart.cartItems.reduce((total, item) => (total + item.total), 0);
            return {
                ...state.shoppingCart,
                orderTotal
            };

        default:
            return state.shoppingCart;
    }
};

const updateCart = (state, bookId) => {
    const { shoppingCart: { cartItems } } = state;

    if (cartItems.some(({ id }) => id === bookId)) {

        const doubledItemIndex = cartItems.findIndex(item => item.id === bookId);
        let { id, title, count, total, price } = cartItems[doubledItemIndex];

        const newItem = {
            id,
            title,
            count: ++count,
            total: total + price,
            price
        }

        return {
            orderTotal: 0,
            cartItems: [
                ...cartItems.slice(0, doubledItemIndex),
                newItem,
                ...cartItems.slice(doubledItemIndex + 1)
            ]
        }
    }

    const book = state.bookList.books.find((book) => book.id === bookId);


    const newItem = {
        id: book.id,
        name: book.title,
        count: 1,
        total: book.price,
        price: book.price
    }

    return {
        orderTotal: 0,
        cartItems: [
            ...cartItems,
            newItem
        ]
    };

}

const increaseAmount = (state, bookId) => {
    const { shoppingCart: { cartItems } } = state;

    const updatedItemIndex = cartItems.findIndex(({ id }) => id === bookId);

    const newUpdatedItem = {
        ...cartItems[updatedItemIndex],
        count: cartItems[updatedItemIndex].count + 1,
        total: cartItems[updatedItemIndex].total + cartItems[updatedItemIndex].price
    }

    return {
        ...state.shoppingCart,
        cartItems: [
            ...cartItems.slice(0, updatedItemIndex),
            newUpdatedItem,
            ...cartItems.slice(updatedItemIndex + 1)
        ]
    };
}

const decreaseAmount = (state, bookId) => {

    const { shoppingCart: { cartItems } } = state;

    const updatedItemIndex = cartItems.findIndex(({ id }) => id === bookId);

    if (cartItems[updatedItemIndex].count - 1 === 0) {
        return {
            cartItems: cartItems.filter(({ id }) => id !== bookId)
        }
    }

    const newUpdatedItem = {
        ...cartItems[updatedItemIndex],
        count: cartItems[updatedItemIndex].count - 1,
        total: cartItems[updatedItemIndex].total - cartItems[updatedItemIndex].price
    }

    return {
        ...state.shoppingCart,
        cartItems: [
            ...cartItems.slice(0, updatedItemIndex),
            newUpdatedItem,
            ...cartItems.slice(updatedItemIndex + 1)
        ]
    };
}

export default updateShoppingCart;