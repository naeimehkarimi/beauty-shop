export const singleProductReduser = (state = {}, action) => {
    switch (action.type) {
        case 'GETSINGLEPRODUCT':
            return {...action.payload};
            
        default:
            return state;
    }
};