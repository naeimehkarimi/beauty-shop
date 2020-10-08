import React, { Fragment } from 'react';
import Slider from './Slider';
import LastProducts from './LastProducts';
import LastArticles from './LastArticles';


const MainPage = () => {
  
    return (
        <Fragment>
            <Slider />
            <LastProducts />
            <LastArticles />
        </Fragment>
    );
};

export default MainPage;
