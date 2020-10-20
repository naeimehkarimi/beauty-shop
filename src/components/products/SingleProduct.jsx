import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../actions/singleproduct';
import { NavLink } from 'react-router-dom';

const SingleProduct = ({ match }) => {
    const singleproduct = useSelector((state) => state.singleproduct);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSingleProduct(match.params.id));
        console.log(match);
    }, []);
    return (
        <Fragment>
            <div className='single-product-container'>
                <div className='single-product'>
                    <div className='single-product-img'>
                        <img
                            src={`../${singleproduct.imageUrl}`}
                            alt='تونر روشن کننده سی گل'
                        />
                    </div>
                    <div className='single-product-info'>
                        <h1 className='mb-4'>{singleproduct.title}</h1>
                        <div className='single-product-attributes mb-5'>
                            <ul>
                                <li>تست</li>
                                <li>تست</li>
                                <li>تست</li>
                                <li>تست</li>
                            </ul>
                        </div>
                        <div className='price mb-4'>
                            <span>قیمت: </span>
                            <span>{singleproduct.price}</span>
                        </div>

                        <div className='single-product-add-to-card'>
                            <button>
                                <span>افزودن به سبد خرید</span>
                                <i className='fa fa-shopping-cart'></i>
                            </button>

                            <div className='add-to-card-counter'>
                                <span className='fa fa-plus'></span>
                                <input value='1' type='text'></input>
                                <span className='fa fa-minus'></span>
                            </div>
                        </div>

                        <div className='single-product-bottom'>
                            <ul>
                                <li>
                                    <a href='#'>
                                        <img
                                            src='../img/orginal-garantie.png'
                                            alt='ضمانت اصالت کالا'
                                        />
                                        <span>ضمانت اصالت کالا</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <img
                                            src='../img/return-garantie.png'
                                            alt='بازگشت رایگان تا 7 روز'
                                        />
                                        <span>بازگشت رایگان تا 7 روز</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <img
                                            src='../img/payment.png'
                                            alt='پرداخت در محل'
                                        />
                                        <span>پرداخت در محل</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='single-product-tab'>
                    <Tabs defaultActiveKey='home' id='uncontrolled-tab-example'>
                        <Tab eventKey='home' title='معرفی محصول'>
                            <p>{singleproduct.description}</p>
                        </Tab>
                        <Tab eventKey='profile' title='نظر دهید'>
                            <form>
                                <div className='row px-5'>
                                    <div className='col-md-4 col-sm-12 '>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                className='form-control'
                                                placeholder='نام و نام خانوادگی'
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                className='form-control'
                                                placeholder='ایمیل'
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-8 col-sm-12 '>
                                        <div className='form-group text-input'>
                                            <textarea
                                                className='form-control'
                                                placeholder='متن نظر'
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className='col-md-12 submit-button'>
                                        <button
                                            type='submit'
                                            className='btn btn-success'
                                        >
                                            {' '}
                                            ثبت دیدگاه{' '}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Fragment>
    );
};

export default SingleProduct;
