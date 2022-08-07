import { useState } from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        if (state.cart.length >= 0) {
            const found = state.cart.find(element => {
                return element.id === payload.id;
            });
            if (found != undefined) {
                found.qty++;
                setState({
                    ...state,
                    cart: [...state.cart],
                });
            } else {
                payload.qty = 1;
                setState({
                    ...state,
                    cart: [...state.cart, payload],
                });
            }
        }
    };

    const removeFromCart = (payload, indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((items, index) => items.id !== payload && index != indexValue),
        });
    }

    return {
        state,
        addToCart,
        removeFromCart,
    }
}

export default useInitialState;
