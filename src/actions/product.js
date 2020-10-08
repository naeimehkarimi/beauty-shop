import {
    getproducts1
} from '../services/productService';

export const getProduct = () => {
    return async(dispatch) => {
        const {data} = await getproducts1();
        await dispatch({ type: 'GETPRODUCTS', payload: data.test });
    };
};