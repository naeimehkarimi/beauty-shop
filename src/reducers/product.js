export const productReduser = (state = [], action) => {
    switch (action.type) {
        case 'GETPRODUCTS':
            return [...action.payload];
        default:
            return state;
    }
};