import {getsliderimgs} from '../services/sliderimgService';

export const getslider = () => {
    return async(dispatch) => {
        const {data} = await getsliderimgs();
        await dispatch({ type: 'GETIMGS', payload: data.sliderimgs});
    };
};