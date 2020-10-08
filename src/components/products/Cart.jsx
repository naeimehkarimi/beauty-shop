import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isEmpty } from 'lodash';

const Cart = () => {
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
        //
        // setprolen(getprolen - 1);
        // var mdiv = document.getElementsByClassName('card-products-item')[i];
        // mdiv.style.transition = 'all .5s ease-in-out';
        // mdiv.style.height = '0px';
        // mdiv.style.borderColor = 'transparent';
        // document.getElementsByClassName(
        //     'card-products-item'
        // )[0].lastElementChild.style.borderBottom = 'none';
        // if (i > 0) {
        //     document.getElementsByClassName('card-products-item')[
        //         i - 1
        //     ].style.borderBottom = 'none';
        //     document.getElementsByClassName('card-products-item')[
        //         i - 1
        //     ].style.borderColor = 'transparent';
        // }
        // if (getprolen === 0) {
        //     document.getElementsByClassName('card-products')[0].style.border =
        //         'none';
        //     console.log('nnn');
        // }
    };

    return (
        <Fragment>
            <div className='container '>
                <div className='row '>
                    <div className='col-md-11 py-5  '>
                        <div className=' py-2  mb-5 heading text-right'>
                            <h1 className='  text-right '>سبد خرید</h1>
                        </div>
                        {!isEmpty(arr) ? (
                            <div>
                                <div className='row card-products w-100 p-0 m-0 mb-5'>
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
                                                    <div className='align-left'>
                                                        <NavLink to='/cart'>
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
                                                            موجود در انبار
                                                        </span>
                                                    </div>
                                                    <div className='d-flex product-count my-3'>
                                                        <button
                                                            className='count-btn'
                                                            onClick={(e) => {
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
                                                            value={getCount}
                                                            placeholder={
                                                                product[4]
                                                            }
                                                            className='form-control border-0 input-counter'
                                                            onChange={(e) => {
                                                                change(
                                                                    e,
                                                                    product,
                                                                    i
                                                                );
                                                            }}
                                                        />

                                                        <button
                                                            className='count-btn'
                                                            onClick={(e) => {
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
                                                        <span>تومان</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='row justify-content-between align-items-center'>
                                    <div className='col-lg-5 col-md-6'>
                                        <table className='table payment-table'>
                                            <tr>
                                                <th className=' w-25 text-center'>
                                                    جمع قیمت
                                                </th>
                                                <td className='w-25 text-center'>
                                                    <div className='price '>
                                                        <span>
                                                            {getTotalPrice}
                                                        </span>
                                                        <span className='mr-1'>
                                                            تومان
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className=' w-25 text-center'>
                                                    تخفیف
                                                </th>
                                                <td className=' w-25 text-center'>
                                                    <div className='price '>
                                                        <span>0</span>
                                                        <span className='mr-1'>
                                                            تومان
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className=' w-25 text-center'>
                                                    قیمت قابل پرداخت
                                                </th>
                                                <td className=' w-25 text-center'>
                                                    <div className='price '>
                                                        <span>
                                                            {getTotalPrice}
                                                        </span>
                                                        <span className='mr-1'>
                                                            تومان
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className=' text-center'
                                                    colSpan='2'
                                                >
                                                    <NavLink
                                                        to='/location'
                                                        type='button'
                                                        className='btn btn-danger text-white w-50'
                                                    >
                                                        فرایند پرداخت
                                                    </NavLink>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className='col-lg-5 col-md-6 justify-content-center d-flex align-items-center'>
                                        <img
                                            className='card-img-boy'
                                            src='./img/card-boy2.svg'
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='row justify-content-between align-items-center empty-cart'>
                                <div className='col-lg-5 col-md-6'>
                                    <p>سبد خرید شما خالی است!</p>
                                </div>
                                <div className='col-lg-5 col-md-6 justify-content-center d-flex align-items-center'>
                                    <img
                                        className='card-img-boy'
                                        src='./img/card-boy2.svg'
                                        alt=''
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Cart;
