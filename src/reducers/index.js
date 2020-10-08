import { combineReducers } from 'redux';
import { productReduser } from './product';
import { singleProductReduser } from './singleproduct';
import { sliderReduser } from './slider';
import { userReduser } from './user';

export const reducers = combineReducers({
    product: productReduser,
    singleproduct: singleProductReduser,
    slider: sliderReduser,
    user: userReduser,
});
