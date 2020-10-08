import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Payment2 = () => {
    var totalPrice = parseInt(localStorage.getItem('totalprice'));
    return (
        <Fragment>
            <div className='container'>
                <div className='row  justify-content-center'>
                    <div className='col-md-7 m-3  text-right'>
                        <div className='col-12 py-4 px-2 mb-4 payment payment-sending-confirm text-right'>
                            <p className='mb-1'>آدرس تحویل سفارش:</p>
                            <p className='payment-confirm-address'>
                                خیابان انقلاب کوچه میرزائی پلاک6
                            </p>
                            <div className='d-flex'>
                                <img
                                    className='payment-icon ml-1'
                                    src='./img/payment-icon.png'
                                    alt=''
                                />
                                <span className='payment-confirm-name'>
                                    انسیه جمالی
                                </span>
                            </div>
                            <span className='payment-confirm-edite'>
                                تغییر یا ویرایش سفارش
                            </span>
                        </div>
                        <div className='col-12 py-4 px-2 mb-1  payment payment-sending-confirm text-right'>
                            <div className='d-flex'>
                                <img
                                    className='payment-confirm-product-icon ml-1'
                                    src='./img/payment-confirm-product-icon.png'
                                    alt=''
                                />
                                <span className='payment-confirm-product'>
                                    مرسوله
                                </span>
                            </div>
                            <div className='row w-100 '>
                                <div className='col-md-3 p-0'>
                                    <img
                                        className='payment-confirm-product-img '
                                        src='./img/iphon.png'
                                        alt=''
                                    />
                                </div>
                                <div className='col-md-9 p-0'>
                                    <div className='d-flex mb-2'>
                                        {/* <img className="payment-confirm-product-icon ml-1" src="./img/payment-confirm-product-icon.png" alt=""/> */}
                                        <div>
                                            <div className='d-flex'>
                                                <img
                                                    className='payment-confirm-product-time ml-1'
                                                    src='./img/delivery-time.png'
                                                    alt=''
                                                />
                                                <span className='payment-confirm-time'>
                                                    انتخاب زمان پرداخت
                                                </span>
                                            </div>

                                            <NavLink
                                                to='/card2'
                                                className='payment-fast-sending d-flex align-content-center'
                                            >
                                                ارسال سریع
                                            </NavLink>
                                        </div>
                                    </div>

                                    <ul
                                        className='nav nav-tabs payment-tab-heading'
                                        id='myTab'
                                        role='tablist'
                                    >
                                        <li className='nav-item w-50'>
                                            <a
                                                className='nav-link active m-0'
                                                id='home-tab'
                                                data-toggle='tab'
                                                href='#home'
                                                role='tab'
                                                aria-controls='home'
                                                aria-selected='true'
                                            >
                                                چهار شنبه
                                            </a>
                                        </li>
                                        <li className='nav-item w-50'>
                                            <a
                                                className='nav-link'
                                                id='profile-tab'
                                                data-toggle='tab'
                                                href='#profile'
                                                role='tab'
                                                aria-controls='profile'
                                                aria-selected='false'
                                            >
                                                پنج شنبه
                                            </a>
                                        </li>
                                    </ul>
                                    <div
                                        className='tab-content payment-tab-content p-1'
                                        id='myTabContent'
                                    >
                                        <div
                                            className='tab-pane fade show active'
                                            id='home'
                                            role='tabpanel'
                                            aria-labelledby='home-tab'
                                        >
                                            <div className='form-check'>
                                                <label className='form-check-label'>
                                                    <input
                                                        type='radio'
                                                        className='form-check-input'
                                                        name='optradio'
                                                    />
                                                    ساعت 12 تا 15
                                                </label>
                                            </div>
                                            <div className='form-check'>
                                                <label className='form-check-label'>
                                                    <input
                                                        type='radio'
                                                        className='form-check-input'
                                                        name='optradio'
                                                    />
                                                    ساعت 12 تا 15
                                                </label>
                                            </div>
                                            <div className='form-check'>
                                                <label className='form-check-label'>
                                                    <input
                                                        type='radio'
                                                        className='form-check-input'
                                                        name='optradio'
                                                    />
                                                    ساعت 12 تا 15
                                                </label>
                                            </div>
                                        </div>
                                        <div
                                            className='tab-pane fade'
                                            id='profile'
                                            role='tabpanel'
                                            aria-labelledby='profile-tab'
                                        >
                                            <div className='form-check'>
                                                <label className='form-check-label'>
                                                    <input
                                                        type='radio'
                                                        className='form-check-input'
                                                        name='optradio'
                                                    />
                                                    ساعت 12 تا 15
                                                </label>
                                            </div>
                                            <div className='form-check'>
                                                <label className='form-check-label'>
                                                    <input
                                                        type='radio'
                                                        className='form-check-input'
                                                        name='optradio'
                                                    />
                                                    ساعت 12 تا 15
                                                </label>
                                            </div>
                                            <div className='form-check '>
                                                <label className='form-check-label'>
                                                    <input
                                                        type='radio'
                                                        className='form-check-input'
                                                        name='optradio'
                                                    />
                                                    ساعت 12 تا 15
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <NavLink
                            to='/card2'
                            className='return-to-cart d-flex align-content-center mt-2'
                        >
                            <i className='fa fa-angle-right ml-1'></i>
                            <span>بازگشت به سبد خرید</span>
                        </NavLink>
                    </div>
                    <div className='col-md-4 m-3 py-4 px-2  payment-sending-time d-flex align-items-center'>
                    <table className='table payment-table'>
                                            <tr>
                                                <th className=' w-25 text-center'>
                                                    جمع قیمت
                                                </th>
                                                <td className='w-25 text-center'>
                                                    <div className='price '>
                                                        <span>
                                                            {totalPrice}
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
                                                            {totalPrice}
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
                </div>
            </div>
        </Fragment>
    );
};

export default Payment2;
