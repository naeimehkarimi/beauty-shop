import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Payment1 = () => {
    return (
        <Fragment>
            <div className='container'>
                <div className='row  justify-content-center'>
                    <div className='col-8 m-5 py-4 px-2  payment payment-sender-address'>
                        <h2 className='text-right'>جزئیات آدرس</h2>
                        <form action='' className='payment-form'>
                            <div className='row  mb-2'>
                                <div className='col-md-5'>
                                    <div className='form-group text-right'>
                                        <label for='sel1'>استان:</label>
                                        <select
                                            className='form-control'
                                            id='sel1'
                                        >
                                            <option>تهران</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <div className='form-group text-right'>
                                        <label for='sel2'>شهر:</label>
                                        <select
                                            className='form-control'
                                            id='sel2'
                                        >
                                            <option>تهران</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <div className='col-md-5'>
                                    <div className='form-group text-right'>
                                        <label for='sel3'>محله:</label>
                                        <select
                                            className=' selectpicker show-menu-arrow form-control'
                                            id='sel3'
                                            title='محله را انتخاب کنید'
                                        >
                                            <option>انقلاب</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-2'>
                                <div className='col-md-10'>
                                    <div className='form-group text-right'>
                                        <label for='exampleFormControlInput1'>
                                            نشانی پستی:
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='exampleFormControlInput1'
                                            placeholder='آدرس'
                                        />
                                        <NavLink
                                            to='/location'
                                            className='peyment-edite-loc'
                                        >
                                            اصلاح موقعیت روی نقشه
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-2 '>
                                <div className='col-md-3'>
                                    <div className='form-group text-right'>
                                        <label for='exampleFormControlInput2'>
                                            پلاک:
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='exampleFormControlInput2'
                                            placeholder=''
                                        />
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='form-group text-right'>
                                        <label for='exampleFormControlInput3'>
                                            واحد:
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='exampleFormControlInput3'
                                            placeholder=''
                                        />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='form-group text-right'>
                                        <label for='exampleFormControlInput4'>
                                            کد پستی:
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='exampleFormControlInput4'
                                            placeholder=''
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='row mb-5 justify-content-center'>
                    <div className='col-8  py-4 px-2  payment  payment-receiver-info'>
                        <form action=''>
                            <div className='row mb-2 '>
                                <div className='col-md-5'>
                                    <div className='form-group text-right'>
                                        <label for='exampleFormControlInput5'>
                                            نام گیرنده:
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='exampleFormControlInput5'
                                            placeholder=''
                                        />
                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <div className='form-group text-right'>
                                        <label for='exampleFormControlInput6'>
                                            نام خانوادگی گیرنده:
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='exampleFormControlInput6'
                                            placeholder=''
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-2 '>
                                <div className='col-md-5'>
                                    <div className='form-group text-right'>
                                        <label for='exampleFormControlInput7'>
                                            کد ملی:
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='exampleFormControlInput7'
                                            placeholder=''
                                        />
                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <div className='form-group text-right'>
                                        <label for='exampleFormControlInput8'>
                                            شماره موبایل:
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='exampleFormControlInput8'
                                            placeholder=''
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='row w-100 p-0 m-0 payment-submit justify-content-center'>
                                <div className='col-md-8 text-center pt-3 '>
                                    <NavLink
                                        to='/payment'
                                        type='button'
                                        className='w-50 text-white  btn btn-danger'
                                    >
                                        تایید و ثبت درخواست
                                    </NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Payment1;
