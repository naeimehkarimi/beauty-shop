import React, { Fragment } from 'react';

const Slider = () => {
    return (
        <Fragment>
            <div id='demo' className='carousel slide mb-5 m-3' data-ride='carousel'>
                <ul className='carousel-indicators slider-indicators'>
                    <li
                        data-target='#demo'
                        data-slide-to='0'
                        className='active'
                    ></li>
                    <li data-target='#demo' data-slide-to='1'></li>
                    <li data-target='#demo' data-slide-to='2'></li>
                </ul>
                <div className='carousel-inner slider-inner'>
                    <div className='carousel-item active'>
                        <img
                            src='./img/slider1.jpg'
                            alt='slider1'
                            width='100%'
                            height='100%'
                        />
                        <div className='carousel-caption'>
                            
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <img
                            src='./img/slider2.jpg'
                            alt='slider2'
                            width='100%'
                            height='100%'
                        />
                        <div className='carousel-caption'>
                            
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <img
                            src='./img/slider3.jpg'
                            alt='slider3'
                            width='100%'
                            height='100%'
                        />
                        <div className='carousel-caption'>
                          
                        </div>
                    </div>
                </div>
                <a
                    className='carousel-control-prev slider-control-prev'
                    href='#demo'
                    data-slide='prev'
                >
                    <span className='carousel-control-prev-icon'></span>
                </a>
                <a
                    className='carousel-control-next slider-control-next'
                    href='#demo'
                    data-slide='next'
                >
                    <span className='carousel-control-next-icon'></span>
                </a>
            </div>
        </Fragment>
    );
};

export default Slider;
