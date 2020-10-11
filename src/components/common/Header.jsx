import React, { Fragment, useState } from 'react';
import { Badge } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';

const Header = () => {
    const user = useSelector((state) => state.user);
    var a = 0;
    if (localStorage.totalProductLength) {
        let prolength = JSON.parse(localStorage.totalProductLength);
        a = prolength;
    }
    let badgeStyle = 'danger';

    const [getSideNav, setSideNav] = useState(false);
    const handleOnClick = () => {
        setSideNav(!getSideNav);
    };
    const [getSearchBox, setSearchBox] = useState(false);
    const handleSearchOnClick = () => {
        setSearchBox(!getSearchBox);
    };
    const [getShowProductCategory, setShowProductCategory] = useState(false);
    const returnMainNavValue = (
        <nav className='main-header-nav'>
            <ul className='my-0 d-inline-block'>
                <li className='py-2 px-1'>
                    <Link to='/'>صفحه اصلی</Link>
                </li>

                <li className=' px-1 d-sm-inline-block d-flex align-items-start'>
                    <button
                        className='mob-categoty-btns'
                        onClick={() =>
                            setShowProductCategory(!getShowProductCategory)
                        }
                    >
                        <i
                            className={`fa fa-plus
                            ${
                                getShowProductCategory
                                    ? 'hide'
                                    : 'show-product-category'
                            } `}
                        ></i>
                        <i
                            className={`fa fa-minus
                            ${
                                getShowProductCategory
                                    ? 'show-product-category'
                                    : 'hide'
                            } `}
                        ></i>
                    </button>
                    <div className='product-category-nav py-1  px-1'>
                        <Link to='/products'>محصولات</Link>
                        <div
                            className={`inner-product-category-nav
                            ${
                                getShowProductCategory
                                    ? 'show-product-category'
                                    : 'null'
                            } `}
                        >
                            <ul>
                                <li className='py-md-3 px-1'>
                                    <Link to='/products'>آرایشی</Link>
                                </li>
                                <li className='py-md-3 px-1'>
                                    <Link to='/products'>پوست</Link>
                                </li>
                                <li className='py-md-3 px-1'>
                                    <Link to='/products'>مو</Link>
                                </li>
                                <li className='py-md-3 px-1'>
                                    <Link to='/products'>بدن</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className='py-2 px-1'>
                    <NavLink to='/'>تخفیف ها</NavLink>
                </li>
                <li className='py-2 px-1'>
                    <a href='#'>تماس با ما</a>
                </li>
            </ul>
        </nav>
    );

    return (
        <Fragment>
            <header>
                <div className='container-fluid px-0 m-0'>
                    <div className='top-nav row w-100 pl-3 py-3 m-0 d-none  d-sm-flex justify-content-between align-items-center'>
                        <div className='d-flex top-nav-logo'>
                            <img src='./img/logo.jpg' />
                        </div>
                        <div className='d-flex top-nav-search w-50'>
                            <form className=' my-0 mx-auto d-flex align-items-center p-2'>
                                <input
                                    className='border-0 '
                                    type='text'
                                    name='search'
                                    placeholder='جستجو...'
                                ></input>

                                <i
                                    type='button'
                                    className='fa fa-search'
                                    aria-hidden='true'
                                ></i>
                            </form>
                        </div>
                        <div className='d-flex top-nav-links d-flex align-items-center'>
                            <NavLink to='/cart' className=' pl-3'>
                                <Badge pill variant={badgeStyle}>
                                    {parseInt(a)}
                                </Badge>
                                <i className='fa fa-shopping-cart'></i>
                            </NavLink>
                            {!isEmpty(user) ? (
                                <div >
                                     <NavLink
                                    to='/'
                                    className='pr-3 ml-1 top-nav-login '
                                >
                                    {' '}
                                    <i className='fa fa-user'></i>
                                </NavLink>
                                    <NavLink className='header-user-link' to='/userinfo'>{user.fullname} </NavLink> 
                                     / 
                                    <NavLink className='header-user-link' to='/logout'> خروج</NavLink>
                                </div>
                            ) : (
                                <NavLink
                                    to='/login'
                                    className='pr-3 top-nav-login '
                                >
                                    {' '}
                                    <i className='fa fa-user'></i>
                                </NavLink>
                            )}
                        </div>
                    </div>
                    <div
                        id='search-box'
                        className={
                            getSearchBox ? 'show-search-box' : 'hide-search-box'
                        }
                    >
                        <form action=''>
                            <input
                                type='search'
                                name='search'
                                placeholder='جستجو...'
                            />
                            <button onClick={handleSearchOnClick}>
                                <i className='fa fa-times'></i>
                            </button>
                        </form>
                    </div>
                    <div
                        id='main-nav'
                        className={`d-flex justify-content-between align-items-center text-white ${
                            getSideNav ? 'main-nav-activated' : null
                        }`}
                    >
                        <div class='main-nav-list d-none d-sm-block float-right w-100 text-right'>
                            {returnMainNavValue}
                        </div>
                        <div className='main-nav-search-and-button d-sm-none d-block'>
                            <button
                                className='main-nav-bars-btn border-0'
                                onClick={handleOnClick}
                            >
                                <i className='fa fa-bars '></i>
                            </button>

                            <button
                                className='main-nav-search-btn p-2 border-0'
                                onClick={handleSearchOnClick}
                            >
                                <i
                                    className='fa fa-search'
                                    aria-hidden='true'
                                ></i>
                            </button>
                        </div>

                        <div>
                            <a
                                className='main-nav-logo d-sm-none d-block'
                                href='#'
                            >
                                <img className='mobile-logo my-2'  src='./img/mobile-logo.jpg' />
                            </a>
                        </div>

                        <div className='main-nav-links d-sm-none d-block'>
                            <NavLink to='/cart' className='button'>
                                <i className='fa fa-shopping-cart'></i>
                            </NavLink>
                            <NavLink
                                to='/login'
                                className='button button-outline'
                            >
                                <i className='fa fa-user'></i>
                            </NavLink>
                        </div>

                        <div className='main-nav-sidebar'>
                            <div className='main-nav-sidebar-header py-2'>
                                {' '}
                                <a href='#'>
                                    <img src='./img/logo.jpg' />
                                </a>
                            </div>
                            <div className='main-nav-sidebar-body'>
                                {returnMainNavValue}
                            </div>
                        </div>
                        <div
                            className='main-nav-overlay'
                            onClick={handleOnClick}
                        ></div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
