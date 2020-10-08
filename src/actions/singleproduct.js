import {getsingleproduct} from '../services/productService';

export const getSingleProduct = (productId) => {
    return async(dispatch) => {
        const data = await getsingleproduct(productId);
        await dispatch({ type: 'GETSINGLEPRODUCT', payload: data});
    };
};