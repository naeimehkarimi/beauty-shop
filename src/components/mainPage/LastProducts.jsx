import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

const LastProducts = () => {
    const product = useSelector((state) => state.product);
    let card = [];
    var totalprice = 0;
    var totalProductLength = 0;
    const [getTotalCartProduct, setTotalCartProduct] = useState(
        totalProductLength
    );
    const handleAdd = (product) => {
        let product1 = [
            product.id,
            product.title,
            product.price,
            product.imageUrl,
            1,
        ];

        let flag = false;
        let pros = '';
        if (localStorage.productscard) {
            pros = JSON.parse(localStorage.productscard);
            for (let index = 0; index < pros.length; index++) {
                let element = pros[index];
                if (element[0] == product1[0]) {
                    element[4] += 1;
                    flag = true;
                }
            }
        }
        if (flag) {
            card = pros;
            localStorage.setItem('productscard', JSON.stringify(pros));

            totalprice = parseInt(localStorage.getItem('totalprice'));
            console.log(totalprice);
            var totalprice2 = totalprice + product1[2];
            console.log(totalprice2);
            localStorage.setItem('totalprice', totalprice2);
            totalProductLength = parseInt(
                localStorage.getItem('totalProductLength')
            );
            var totalProductLength2 = totalProductLength + 1;
            localStorage.setItem('totalProductLength', totalProductLength2);
            setTotalCartProduct(totalProductLength2);
        } else {
            if (localStorage.productscard) {
                card = pros;
                card.push(product1);
                localStorage.setItem('productscard', JSON.stringify(card));
                totalprice = parseInt(localStorage.getItem('totalprice'));
                console.log(totalprice);
                var totalprice2 = totalprice + product1[2];
                console.log(totalprice2);
                localStorage.setItem('totalprice', totalprice2);
                totalProductLength = parseInt(
                    localStorage.getItem('totalProductLength')
                );
                var totalProductLength2 = totalProductLength + 1;
                localStorage.setItem('totalProductLength', totalProductLength2);
                setTotalCartProduct(totalProductLength2);
            } else {
                card.push(product1);
                localStorage.setItem('productscard', JSON.stringify(card));
                totalprice = product1[2];
                localStorage.setItem('totalprice', totalprice);
                var totalProductLength2 = totalProductLength + 1;
                localStorage.setItem('totalProductLength', totalProductLength2);
                setTotalCartProduct(totalProductLength2);
            }
        }
    };
    return (
        <Fragment>
            <div className='last-products-section mb-5'>
                <h2 className='section-head last-products-section-head m-0'>
                    <span>آخرین محصولات</span>
                </h2>
                <div className='products last-products'>
                    <div
                        id='multi-item-example'
                        className='carou carousel slide carousel-multi-item d-flex align-items-center'
                        data-ride='carousel'
                    >
                        <a
                            className='btn-floating next-btn'
                            href='#multi-item-example'
                            data-slide='next'
                        >
                            <i className='fa fa-chevron-right text-dark'></i>
                        </a>

                        <div
                            className='carou-inner carousel-inner d-none d-sm-block '
                            role='listbox'
                        >
                            <div className='carousel-item active '>
                                <div className='row px-3 justify-content-around'>
                                    {product.map(function (product, i) {
                                        if (i < 4) {
                                            return (
                                                <div
                                                    className='col-lg-3 col-md-4 text-right py-3'
                                                    key={product.id}
                                                >
                                                    <div className='inner-product-item'>
                                                        <NavLink
                                                            to={`/product/${product.id}`}
                                                        >
                                                            <div className='product-img'>
                                                                <img
                                                                    src={
                                                                        product.imageUrl
                                                                    }
                                                                    alt=''
                                                                />
                                                            </div>
                                                            <div className='product-data'>
                                                                <h2>
                                                                    {
                                                                        product.title
                                                                    }
                                                                </h2>
                                                                <div className='price'>
                                                                    <span>
                                                                        {
                                                                            product.price
                                                                        }
                                                                    </span>
                                                                    <span>
                                                                        تومان
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                        <div className='add-to-card'>
                                                            <NavLink to ='/'>
                                                                <button
                                                                    onClick={() => {
                                                                        handleAdd(
                                                                            product
                                                                        );
                                                                    }}
                                                                >
                                                                    <i className='fa fa-shopping-cart'></i>
                                                                    <span
                                                                        className='add-to-card-span'
                                                                        id='span1'
                                                                    >
                                                                        افزودن
                                                                        به سبد
                                                                        خرید
                                                                    </span>
                                                                </button>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>

                            <div className='carousel-item '>
                                <div className='row px-3 justify-content-around'>
                                    {product.map(function (product, i) {
                                        if (i < 4) {
                                            return (
                                                <div
                                                    className='col-lg-3 col-md-4 text-right py-3'
                                                    key={product.id}
                                                >
                                                    <div className='inner-product-item'>
                                                        <NavLink
                                                            to={`/product/${product.id}`}
                                                        >
                                                            <div className='product-img'>
                                                                <img
                                                                    src={
                                                                        product.imageUrl
                                                                    }
                                                                    alt=''
                                                                />
                                                            </div>
                                                            <div className='product-data'>
                                                                <h2>
                                                                    {
                                                                        product.title
                                                                    }
                                                                </h2>
                                                                <div className='price'>
                                                                    <span>
                                                                        {
                                                                            product.price
                                                                        }
                                                                    </span>
                                                                    <span>
                                                                        تومان
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                        <div className='add-to-card'>
                                                            <NavLink to='/products'>
                                                                <button
                                                                    onClick={() => {
                                                                        handleAdd(
                                                                            product
                                                                        );
                                                                    }}
                                                                >
                                                                    <i className='fa fa-shopping-cart'></i>
                                                                    <span
                                                                        className='add-to-card-span'
                                                                        id='span1'
                                                                    >
                                                                        افزودن
                                                                        به سبد
                                                                        خرید
                                                                    </span>
                                                                </button>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                        <div
                            className='carousel-inner d-block d-sm-none '
                            role='listbox'
                        >
                            <div className='carousel-item active '>
                                <div className='row px-3 justify-content-center'>
                                    {product.map(function (product, i) {
                                        if (i < 2) {
                                            return (
                                                <div
                                                    className='col-6 text-right py-3 px-1'
                                                    key={product.id}
                                                >
                                                    <div className='inner-product-item h-100 d-flex flex-column justify-content-between'>
                                                        <NavLink
                                                            className='d-flex flex-column justify-content-between prpduct-item-link '
                                                            to={`/product/${product.id}`}
                                                        >
                                                            <div className='product-img '>
                                                                <img
                                                                    src={
                                                                        product.imageUrl
                                                                    }
                                                                    alt=''
                                                                />
                                                            </div>

                                                            <h2 className='my-2 mr-1'>
                                                                {product.title}
                                                            </h2>
                                                            <div className='price my-2 mr-1'>
                                                                <span>
                                                                    {
                                                                        product.price
                                                                    }
                                                                </span>
                                                                <span>
                                                                    تومان
                                                                </span>
                                                            </div>
                                                        </NavLink>
                                                        <div className='add-to-card '>
                                                            <NavLink to='/products'>
                                                                <button
                                                                    onClick={() => {
                                                                        handleAdd(
                                                                            product
                                                                        );
                                                                    }}
                                                                >
                                                                    <i className='fa fa-shopping-cart'></i>
                                                                    <span
                                                                        className='add-to-card-span'
                                                                        id='span1'
                                                                    >
                                                                        افزودن
                                                                        به سبد
                                                                        خرید
                                                                    </span>
                                                                </button>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>

                            <div className='carousel-item '>
                                <div className='row px-3 justify-content-center'>
                                    {product.map(function (product, i) {
                                        if (i < 2) {
                                            return (
                                                <div
                                                    className='col-6 text-right py-3'
                                                    key={product.id}
                                                >
                                                    <div className='inner-product-item h-100'>
                                                        <NavLink
                                                            to={`/product/${product.id}`}
                                                        >
                                                            <div className='product-img'>
                                                                <img
                                                                    src={
                                                                        product.imageUrl
                                                                    }
                                                                    alt=''
                                                                />
                                                            </div>
                                                            <div className='product-data'>
                                                                <h2>
                                                                    {
                                                                        product.title
                                                                    }
                                                                </h2>
                                                                <div className='price'>
                                                                    <span>
                                                                        {
                                                                            product.price
                                                                        }
                                                                    </span>
                                                                    <span>
                                                                        تومان
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                        <div className='add-to-card'>
                                                            <NavLink to='/products'>
                                                                <button
                                                                    onClick={() => {
                                                                        handleAdd(
                                                                            product
                                                                        );
                                                                    }}
                                                                >
                                                                    <i className='fa fa-shopping-cart'></i>
                                                                    <span
                                                                        className='add-to-card-span'
                                                                        id='span1'
                                                                    >
                                                                        افزودن
                                                                        به سبد
                                                                        خرید
                                                                    </span>
                                                                </button>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                        <a
                            className='btn-floating prev-btn '
                            href='#multi-item-example'
                            data-slide='prev'
                        >
                            <i className='fa fa-chevron-left text-dark'></i>
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LastProducts;
