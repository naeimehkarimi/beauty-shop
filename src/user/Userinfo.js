import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isEmpty } from 'lodash';

const Userinfo = () => {
    const user = useSelector((state) => state.user);

    var arr = [];
    var totalPrice = parseInt(localStorage.getItem('totalprice'));
    if (localStorage.productscard) {
        let productscard = JSON.parse(localStorage.productscard);
        arr = productscard;
    }
    const [getTotalPrice, setTotalPrice] = useState(totalPrice);
    const [getCount, setCount] = useState();

    var totalProductLength = parseInt(
        localStorage.getItem('totalProductLength')
    );
    const [getprolen, setprolen] = useState(totalProductLength);

    const change = (e, product, i) => {
        if (e.target.value < 1) {
            product[4] = 1;
            setCount(product[4]);
            localStorage.setItem('productscard', JSON.stringify(arr));
            document.getElementsByClassName('price2')[i].innerHTML = product[2];
        } else {
            e.value = e.target.value;
            var price3 = product[2] * e.target.value;
            var p1 = product[2] * product[4];
            var totalprice = parseInt(localStorage.getItem('totalprice'));
            var totalprice2 = totalprice - p1;
            totalprice2 = totalprice2 + price3;
            localStorage.setItem('totalprice', totalprice2);
            setTotalPrice(totalprice2);
            product[4] = e.target.value;
            localStorage.setItem('productscard', JSON.stringify(arr));
            document.getElementsByClassName('price2')[
                i
            ].innerHTML = price3
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    };

    const uperCount = (e, product, i) => {
        let input_counter = e.target.parentNode.parentNode.getElementsByClassName(
            'input-counter'
        )[0];
        if (input_counter.value <= 1) {
            input_counter.value = 1;
        }
        input_counter.value = parseInt(input_counter.value) + 1;
        var x = document.getElementsByClassName('price2')[i].innerText;
        var y = product[2];
        var price3 = parseInt(y) * input_counter.value;
        var totalprice = parseInt(localStorage.getItem('totalprice'));
        var totalprice2 = totalprice + parseInt(y);
        localStorage.setItem('totalprice', totalprice2);
        setTotalPrice(totalprice2);
        var z = product[4];
        product[4] = parseInt(z) + 1;
        localStorage.setItem('productscard', JSON.stringify(arr));
        document.getElementsByClassName('price2')[
            i
        ].innerHTML = price3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const downerCount = (e, product, i) => {
        let input_counter = e.target.parentNode.parentNode.getElementsByClassName(
            'input-counter'
        )[0];
        if (input_counter.value <= 1) {
            input_counter.value = 1;
            product[4] = 1;

            localStorage.setItem('productscard', JSON.stringify(arr));
            document.getElementsByClassName('price2')[i].innerHTML = product[2];
        } else {
            input_counter.value = parseInt(input_counter.value) - 1;
            var x = document.getElementsByClassName('price2')[i].innerText;
            var y = product[2];
            var price3 = parseInt(y) * input_counter.value;
            var totalprice = parseInt(localStorage.getItem('totalprice'));
            var totalprice2 = totalprice - parseInt(y);
            localStorage.setItem('totalprice', totalprice2);
            setTotalPrice(totalprice2);
            var z = product[4];
            product[4] = parseInt(z) - 1;
            localStorage.setItem('productscard', JSON.stringify(arr));
            document.getElementsByClassName('price2')[
                i
            ].innerHTML = price3
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    };

    const slideUp = (e, product, i) => {
        let priceParent = e.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
            'price-group'
        )[0];
        let price = priceParent.getElementsByClassName('price2')[0];
        let priceText = price.innerText;
        var totalprice = parseInt(localStorage.getItem('totalprice'));
        var totalprice2 = totalprice - parseInt(priceText);
        localStorage.setItem('totalprice', totalprice2);
        setTotalPrice(totalprice2);

        //
        const arr2 = arr.filter((pro) => pro[0] !== product[0]);
        localStorage.setItem('productscard', JSON.stringify(arr2));
        //

        var totalProductLength2 = totalProductLength - product[4];
        localStorage.setItem('totalProductLength', totalProductLength2);
        setprolen(totalProductLength2);
    };

    return (
        <Fragment>
            <div className='container '>
                <div className='row w-100 m-0 py-5'>
                    <div className='col-md-3 '>
                        <div className='py-2 px-3 d-flex align-items-center username mb-4'>
                            <img
                                className='userinfo-icon ml-3'
                                src='./img/userinfo-boy.svg'
                            />
                            <div className='text-right'>
                                <p className='m-0'>{user.fullname}</p>
                            </div>
                        </div>
                        <div className='userinfo-right mb-4'>
                            <div
                                class='list-group  w-100 text-right  '
                                id='userinfo-list-tab'
                                role='tablist'
                            >
                                <a
                                    className='list-group-item list-group-item-action active text-dark text-right user-infoo  d-flex align-items-center'
                                    href='#product-specifications'
                                    data-toggle='list'
                                >
                                    <img
                                        className='userinfo-icon info-icon1 ml-2'
                                        src='./img/userinfo-boy.svg'
                                    />
                                    اطلاعات حساب
                                </a>
                                <a
                                    class='list-group-item list-group-item-action text-dark  text-right user-order d-flex align-items-center'
                                    id='list-questions-list'
                                    data-toggle='list'
                                    href='#product-questions'
                                    role='tab'
                                    aria-controls='profile'
                                >
                                    <img
                                        className='userinfo-icon order-icon1 ml-2'
                                        src='./img/orders.svg'
                                    />
                                    سبد خرید
                                </a>

                                <NavLink
                                    to='logout'
                                    className='list-group-item list-group-item-action  text-dark text-right py-2 px-3 d-flex align-items-center username '
                                >
                                    <img
                                        className='userinfo-icon ml-3'
                                        src='./img/exit.svg'
                                    />

                                    <span className='text-right '>خروج</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='userinfo-left username mx-3 pb-3'>
                            <div
                                class='tab-content user-panel-tab-content pt-0'
                                id='nav-tabContent'
                            >
                                <div
                                    class='tab-pane fade text-right'
                                    id='product-questions'
                                    role='tabpanel'
                                    aria-labelledby='list-questions-list'
                                >
                                    <h3 className='p-3 info-heading'>
                                        سبد خرید
                                    </h3>
                                    {!isEmpty(arr) ? (
                                        <div>
                                            {arr.map((product, i) => (
                                                <div
                                                    className='col-md-12 card-products-item p-0'
                                                    key={i}
                                                >
                                                    <div className='row w-100 py-3 m-0'>
                                                        <div className='col-md-3 p-0'>
                                                            <img
                                                                className='card-item-img'
                                                                src={product[3]}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <div className='col-md-9 px-3 d-flex flex-column justify-content-between'>
                                                            <div className='text-left'>
                                                                <NavLink to='/userinfo'>
                                                                    <button
                                                                        className='card-product-trash'
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            slideUp(
                                                                                e,
                                                                                product,
                                                                                i
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            className='card-item-icon-trash1 '
                                                                            src='./img/red-trash.png'
                                                                            alt=''
                                                                        />
                                                                        <img
                                                                            className='card-item-icon-trash2 '
                                                                            src='./img/white-trash.png'
                                                                            alt=''
                                                                        />
                                                                    </button>
                                                                </NavLink>
                                                            </div>

                                                            <h2 className='text-right mb-3'>
                                                                {product[1]}
                                                            </h2>

                                                            <div className='text-right  mb-1'>
                                                                <img
                                                                    className='card-item-icon ml-1'
                                                                    src='./img/card-available.png'
                                                                    alt=''
                                                                />
                                                                <span>
                                                                    موجود در
                                                                    انبار
                                                                </span>
                                                            </div>
                                                            <div className='d-flex product-count my-3'>
                                                                <button
                                                                    className='count-btn'
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        uperCount(
                                                                            e,
                                                                            product,
                                                                            i
                                                                        );
                                                                    }}
                                                                >
                                                                    <i class='fa fa-plus ml-1'></i>
                                                                </button>
                                                                <input
                                                                    type='number'
                                                                    value={
                                                                        getCount
                                                                    }
                                                                    placeholder={
                                                                        product[4]
                                                                    }
                                                                    className='form-control border-0 input-counter'
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        change(
                                                                            e,
                                                                            product,
                                                                            i
                                                                        );
                                                                    }}
                                                                />

                                                                <button
                                                                    className='count-btn'
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        downerCount(
                                                                            e,
                                                                            product,
                                                                            i
                                                                        );
                                                                    }}
                                                                >
                                                                    <i class='fa fa-minus ml-1'></i>
                                                                </button>
                                                            </div>
                                                            <div className='price-group d-flex justify-content-end'>
                                                                <span className='ml-1 price2 '>
                                                                    {product[2] *
                                                                        product[4]
                                                                            .toString()
                                                                            .replace(
                                                                                /\B(?=(\d{3})+(?!\d))/g,
                                                                                ','
                                                                            )}
                                                                </span>
                                                                <span>
                                                                    تومان
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className=' p-2'>
                                            <p>سبد خرید شما خالی است!</p>
                                        </div>
                                    )}
                                </div>

                                <div
                                    className='tab-pane fade  show active text-right'
                                    id='product-specifications'
                                    role='tabpanel'
                                    aria-labelledby='list-profile-list'
                                >
                                    <h3 className='p-3 info-heading'>
                                        اطلاعات شخصی
                                    </h3>

                                    <div className='row w-100 p-0 m-0 personal-info'>
                                        <div className='col-md-6'>
                                            <div class='form-group mb-3'>
                                                <label for='username'>
                                                    نام و نام خانوادگی:
                                                </label>
                                                <input
                                                    class='form-control'
                                                    name='fullname'
                                                    type='text'
                                                    id='fullname'
                                                    value={user.fullname}
                                                    required=''
                                                    placeholder=''
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div class='form-group mb-3'>
                                                <label for='username'>
                                                    نام کاربری:
                                                </label>
                                                <input
                                                    class='form-control'
                                                    name='username'
                                                    type='text'
                                                    id='username'
                                                    required=''
                                                    placeholder=''
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div class='form-group mb-3'>
                                                <label for='username'>
                                                    شماره تلفن:
                                                </label>
                                                <input
                                                    class='form-control'
                                                    name='fullname'
                                                    type='text'
                                                    id='fullname'
                                                    required=''
                                                    placeholder=''
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div class='form-group mb-3'>
                                                <label for='username'>
                                                    پست الکترونیک:
                                                </label>
                                                <input
                                                    class='form-control'
                                                    name='username'
                                                    type='text'
                                                    id='username'
                                                    contentEditable='true'
                                                    value={user.email}
                                                    placeholder=''
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div class='form-group mb-3'>
                                                <label for='username'>
                                                    کد ملی:
                                                </label>
                                                <input
                                                    class='form-control'
                                                    name='fullname'
                                                    type='text'
                                                    id='fullname'
                                                    required=''
                                                    placeholder=''
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                                            <NavLink
                                                to='/userinfo'
                                                type='button'
                                                className='btn btn-danger text-white w-50 userinfo-edite-btn'
                                            >
                                                ویرایش
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Userinfo;
