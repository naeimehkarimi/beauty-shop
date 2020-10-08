import React from 'react';
import { range } from 'lodash';

const Pagination = ({ totalProducts, currentPage, perPage, onPageChange }) => {
    const pageCount = Math.ceil(totalProducts / perPage);
    if (pageCount === 1) return null;
    const pages = range(1, pageCount + 1);
    return (
        <nav aria-label='Page navigation '>
            <ul className='pagination justify-content-center pt-5'>
                <li
                    className={`page-item
                                ${currentPage === 1 ? 'disabled' : 'null'} `}
                  
                >
                    <a className='page-link' href='#'
                    onClick={() => onPageChange(currentPage-1)}
                    >
                        صفحه قبلی
                        
                    </a>
                </li>
                {pages.map((page) => (
                    <li
                        key={page}
                        className={
                            page === currentPage
                                ? 'page-item active'
                                : 'page-item'
                        }
                    >
                        <a
                            className='page-link'
                            style={{ cursor: 'pointer' }}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
                <li
                    className={`page-item
                                ${
                                    currentPage === pageCount
                                        ? 'disabled'
                                        : 'null'
                                } `}
                >
                    <a
                        className='page-link'
                        href='#'
                        onClick={() => onPageChange(currentPage+1)}
                    >
                        صفحه بعدی
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
