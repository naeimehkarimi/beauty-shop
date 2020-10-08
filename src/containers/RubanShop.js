import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from '../components/Layoutes/MainLayout';
import SingleProduct from '../components/products/SingleProduct';
import AllProducts from '../components/products/AllProducts';
import Cart from '../components/products/Cart';
import Location from '../components/products/Location';
import Payment from '../components/products/Payment';
import Paymentinfo from '../components/products/Paymentinfo';
import Login from '../components/login/Login';
import Register from '../components/login/Register';
import MainPage from '../components/mainPage/MainPage';
import { decodeToken } from '../utils/decodeToken';
import Logout from '../components/login/Logout';
import { useDispatch } from 'react-redux';
import { addUser, clearUser } from '../actions/user';
import Userinfo from '../user/Userinfo';

const RubbanShop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = decodeToken(token);
            const nowDate = Date.now() / 1000;
            if (decodedToken.payload.exp < nowDate) {
                localStorage.removeItem('token');
                dispatch(clearUser());
            } else dispatch(addUser(decodedToken.payload.user));
        }
    }, []);
    return (
        <MainLayout>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/logout' component={Logout} />
                <Route path='/userinfo' component={Userinfo} />
                <Route path='/register' component={Register} />
                <Route path='/products' component={AllProducts} />
                <Route path='/product/:id' component={SingleProduct} />
                <Route path='/cart' component={Cart} />
                <Route path='/location' component={Location} />
                <Route path='/paymentinfo' component={Paymentinfo} />
                <Route path='/payment' component={Payment} />
                <Route path='/' exact component={MainPage} />
            </Switch>
        </MainLayout>
    );
};

export default RubbanShop;
