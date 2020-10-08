import React, { Fragment, useState, useEffect, useRef } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../../services/userService';
import SimpleReactValidator from 'simple-react-validator';
import { Helmet } from 'react-helmet';
import { addUser } from '../../actions/user';
import { decodeToken } from '../../utils/decodeToken';
import { useDispatch } from 'react-redux';

const Login = ({history}) => {
    const dispatch=useDispatch();
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
    const reset = () => {
        setEmail('');
        setPassword('');
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            email,
            password,
        };

        try {
            if (validator.current.allValid()) {
                const { status, data } = await loginUser(user);
                if (status === 200) {
                    toast.success('کاربر با موفقیت وارد شد.', {
                        position: 'top-center',
                        closeOnClick: true,
                    });

                    localStorage.setItem('token', data.token);
                    dispatch(addUser(decodeToken(data.token).payload.user));
                    history.replace('/');
                    reset();
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            toast.error('ورود ناموفق بود.', {
                position: 'top-center',
                closeOnClick: true,
            });
            console.log(ex);
        }
    };
  return (
    <Fragment>
      <div className="container">
      <Helmet><title>بیوتی شاپ | ورود به سایت</title></Helmet>
     
      <div className=" row w-100 py-5 m-0 user-login-container">
        <div className="col-md-6 px-5 user-login login text-right" >

          <h2>عضو روبان هستید؟</h2>
          <h3>با استفاده از شماره ایمیل و رمز عبور خود وارد شوید.</h3>
          <form
                                    onSubmit={handleSubmit}
                                    className='login-form w-100  text-right'
                                >
                                    <div class='form-group mb-3'>
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
                                                validator.current.showMessageFor(
                                                    'email'
                                                );
                                            }}
                                        />
                                        {validator.current.message(
                                            'email',
                                            email,
                                            'required|email'
                                        )}
                                    </div>
                                    <div class='form-group mb-1'>
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
                                    <NavLink to='/' className='p-0 mr-2'>
                                        رمزم را فراموش کردم
                                    </NavLink>

                                    <div className='d-flex justify-content-center mt-4'>
                                        <button
                                            type='submit'
                                            className='btn btn-danger text-white w-100 login-btn py-2'
                                        >
                                            ورود
                                        </button>
                                    </div>
                                </form>
        </div>
        <div className="col-md-6 text-center user-login register text-right" >
         
          <h2>خرید اول خود را تجربه می‌کنید؟</h2>
          <h3>برای تکمیل فرایند خرید خود ثبت نام کنید.</h3>
          <NavLink to="/register">ثبت نام در روبان</NavLink>
          <div className="register-message">

          <p>
            پس از ثبت نام می‌توانید به سادگی سفارش خود را ثبت کنید، سفارش را
            پیگیری کنید و تاریخچه خرید خود را مشاهده کنید.
          </p>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default Login;
