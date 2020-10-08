import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../../services/userService';
import SimpleReactValidator from 'simple-react-validator';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';

const Register = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: 'پر کردن این فیلد الزامی  می باشد',
                min: 'کمتر از 5 کاراکتر نباید باشد',
                email: 'ایمیل نوشته شده صحیح نمی باشد',
            },
            element: (message) => (
                <div
                    style={{
                        color: 'red',
                        fontSize: '.8rem',
                        marginRight: '.5rem',
                    }}
                >
                    {message}
                </div>
            ),
        })
    );

    const [, forceUpdate] = useState();
    const [policy, setPolicy] = useState();
    const reset = () => {
        setEmail('');
        setPassword('');
        setFullname('');
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            fullname,
            email,
            password,
        };

        try {
            if (validator.current.allValid()) {
                const { status, data } = await registerUser(user);
                if (status === 201) {
                    toast.success('کاربر با موفقیت ساخته شد', {
                        position: 'top-center',
                        closeOnClick: true,
                    });
                    console.log(data);
                    reset();
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            toast.error('کاربر ساخنه نشد', {
                position: 'top-center',
                closeOnClick: true,
            });
            console.log(ex);
        }
    };
    return (
        <Fragment>
            <div className='row w-100 p-0 m-0 justify-content-center user-login-container'>
            <Helmet><title>بیوتی شاپ | عضویت در سایت</title></Helmet>
                <div className='col-md-6 user-login '>
                    <form
                        onSubmit={handleSubmit}
                        className='login-form w-100  text-right'
                    >
                        <div className='form-group mb-3'>
                            <label for='username'>نام کاربری</label>
                            <input
                                className='form-control'
                                name='username'
                                type='text'
                                id='username'
                                required=''
                                placeholder=''
                                value={fullname}
                                onChange={(e) => {
                                    setFullname(e.target.value);
                                    validator.current.showMessageFor(
                                        'username'
                                    );
                                }}
                            />
                            {validator.current.message(
                                'username',
                                fullname,
                                'required|min:5'
                            )}
                        </div>
                        <div className='form-group mb-3'>
                            <label for='email'>ایمیل</label>
                            <input
                                className='form-control'
                                name='email'
                                type='email'
                                id='email'
                                required=''
                                placeholder=''
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    validator.current.showMessageFor('email');
                                }}
                            />
                            {validator.current.message(
                                'email',
                                email,
                                'required|email'
                            )}
                        </div>
                        <div className='form-group mb-1'>
                            <label for='password'>رمز عبور</label>
                            <input
                                className='form-control'
                                name='password'
                                type='password'
                                id='password'
                                required=''
                                placeholder=''
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    validator.current.showMessageFor(
                                        'password'
                                    );
                                }}
                            />
                            {validator.current.message(
                                'password',
                                password,
                                'required|min:5'
                            )}
                        </div>
                        <div className='form-group mb-3 '>
                            <div className=' d-flex align-items-center'>
                                <input
                                    className='form-control  terms ml-2'
                                    type='checkbox'
                                    name='policy'
                                    value={policy}
                                    onChange={(e) => {
                                        setPolicy(e.currentTarget.checked);
                                        validator.current.showMessageFor(
                                            'policy'
                                        );
                                    }}
                                />

                                <span className=''>
                                    قوانین و مقررات را میپذیرم
                                </span>
                            </div>
                            {validator.current.message(
                                'policy',
                                policy,
                                'required'
                            )}
                        </div>

                        <div className='d-flex justify-content-center mt-4'>
                            <button
                                type='submit'
                                className='btn btn-danger text-white w-75 login-btn py-2'
                            >
                                تایید
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Register;
