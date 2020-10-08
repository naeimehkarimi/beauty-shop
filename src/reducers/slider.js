export const sliderReduser = (state = [], action) => {
    switch (action.type) {
        case 'GETIMGS':
            return [...action.payload];
        default:
            return state;
    }
};