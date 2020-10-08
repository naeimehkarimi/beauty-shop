import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../common/Pagination';
import { paginate } from '../../utils/paginate';

const AllProducts = () => {
    const products = useSelector((state) => state.product);
    const [getCurrent, setCurrent] = useState(1);
    const [getPerpage] = useState(8);
    const handlePageChange = (page) => {
        setCurrent(page);
    };
    const allProducts = paginate(products, getCurrent, getPerpage);

    let card = [];
    var totalprice = 0;
    var totalProductLength = 0;
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
            } else {
                card.push(product1);
                localStorage.setItem('productscard', JSON.stringify(card));
                totalprice = product1[2];
                localStorage.setItem('totalprice', totalprice);
                var totalProductLength2 = totalProductLength + 1;
                localStorage.setItem('totalProductLength', totalProductLength2);
            }
        }
    };

    return (
        <Fragment>
            <div className='row w-100 p-0 m-0 all-products-section'>
                <div className='col-md-2 text-right p-3'>
                    <div className='all-products-category'>
                        <h2>دسته بندی ها</h2>
                        <div className='all-products-category-list'>
                            <ul>
                                <li className='p-2 list-unstyled'>
                                    <a href='#'>آرایشی</a>
                                </li>
                                <li className='p-2 list-unstyled'>
                                    <a href='#'>پوست</a>
                                </li>
                                <li className='p-2 list-unstyled'>
                                    <a href='#'>مو</a>
                                </li>
                                <li className='p-2 list-unstyled'>
                                    <a href='#'>بدن</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-md-10  text-right'>
                    <div className='row all-products-sort-order my-2'>
                        <div className='col-md-2 col-7 form-group p-0'>
                            <select className='form-control product-sort w-auto '>
                                <option> مرتب سازی بر اساس</option>
                                <option> پر فروش ترین </option>
                                <option> جدیدترین </option>
                                <option> ارزان ترین </option>
                                <option>گران ترین</option>
                            </select>
                        </div>
                    </div>
                    <div className='mx-3'>
                        <div className='row products last-products'>
                            {allProducts.map(function (product, i) {
                                return (
                                    <div
                                        className='col-md-4 col-lg-3  text-right py-3'
                                        key={product.id}
                                    >
                                        <div className='inner-product-item'>
                                            <NavLink
                                                to={`/product/${product.id}`}
                                            >
                                                <div className='product-img'>
                                                    <img
                                                        src={product.imageUrl}
                                                        alt=''
                                                    />
                                                </div>
                                                <div className='product-data'>
                                                    <h2>{product.title}</h2>
                                                    <div className='price'>
                                                        <span>
                                                            {product.price}
                                                        </span>
                                                        <span>تومان</span>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            <div className='add-to-card'>
                                                <NavLink to='/products'>
                                                    <button
                                                        onClick={() => {
                                                            handleAdd(product);
                                                        }}
                                                    >
                                                        <i className='fa fa-shopping-cart'></i>
                                                        <span
                                                            className='add-to-card-span'
                                                            id='span1'
                                                        >
                                                            افزودن به سبد خرید
                                                        </span>
                                                    </button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <Pagination
                        totalProducts={products.length}
                        currentPage={getCurrent}
                        perPage={getPerpage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default AllProducts;
