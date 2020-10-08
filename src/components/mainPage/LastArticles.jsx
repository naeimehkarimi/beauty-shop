import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const LastArticles = () => {
    return (
        <Fragment>
            <div className='last-articles-section'>
                <h2 className='section-head last-articles-section-head'>
                    <span>آخرین مقالات</span>
                </h2>
                <div className='last-articles'>
                    <div className='last-article'>
                        <a href='#'>
                            <div className='last-article-img-content'>
                                <img
                                    className='last-article-img'
                                    src='./img/articleLast1.jpg'
                                    alt='مدل مو'
                                ></img>
                            </div>
                            <div className='last-article-data'>
                                <div className='last-article-content'>
                                    <h3>مدل مو</h3>
                                    <div className='last-article-head d-flex align-items-center'>
                                        <div className='last-article-head-avatar text-center'>
                                            <img
                                                src='./img/writer2.png'
                                                alt='نویسنده'
                                                width='128'
                                                height='128'
                                            />
                                        </div>
                                        <div className='last-article-head-body'>
                                            <h4>مهسا حیدری</h4>
                                            <span>1399-06-04</span>
                                            
                                        </div>
                                    </div>
                                    <div>
                                        {' '}
                                        تازه عروس ها تصور می کنند که بعد از
                                        گذراندن مراسم های طولانی و سخت عروسی
                                        الان میتوانند نفسی راحت بکشند؟ نه! هیچ
                                        راحتی وجود ندارد. تازه مهمانی ها و مراسم
                                        هایی که دیگران برای شما می گیرند، شروع
                                        شده!! اما کمی میتوان کار را راحت تر کرد.
                                        مثلا اگر از مدل موهای سخت و سنگین
                                        آرایشگاه ها خسته شدید، در این مقاله پنج
                                        مدل موی راحت را به شما معرفی خواهیم کرد.
                                        1. پیچش دو طرف مو این مدل مو برای دورهمی
                                        های خودمانی می تواند مدل مناسبی باشد.
                                        علاوه بر اینکه انجام آن نیز بسیار راحت
                                        است.‌ قسمتی از مو را در...
                                    </div>
                                </div>
                                <div className='more d-flex align-items-center'>
                                    <span className=' p-0 m-0 ml-2  '>
                                        بیشتر
                                    </span>

                                    <i
                                        className='fa fa-chevron-left'
                                        aria-hidden='true'
                                    ></i>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='last-article'>
                        <a href='#'>
                            <div className='last-article-img-content'>
                                <img
                                    className='last-article-img'
                                    src='./img/articleLast2.jpeg'
                                    alt='ماساژ صورت'
                                ></img>
                            </div>
                            <div className='last-article-data'>
                                <div className='last-article-content'>
                                    <h3>ماساژ صورت</h3>
                                    <div className='last-article-head d-flex align-items-center'>
                                        <div className='last-article-head-avatar text-center'>
                                            <img
                                                src='./img/writer2.png'
                                                alt='نویسنده'
                                                width='128'
                                                height='128'
                                            />
                                        </div>
                                        <div className='last-article-head-body'>
                                            <h4>مهسا حیدری</h4>
                                            <span>1399-04-04</span>
                                           
                                        </div>
                                    </div>
                                    <div>
                                        {' '}
                                        همانطور که می‌ دانید ماساژ دادن برای
                                        پوست بسیار مفید است و می‌ تواند خواص ضد
                                        پیری و جوانسازی هم داشته باشد، درخشندگی
                                        پوست شما را افزایش دهد. در این مورد
                                        شواهد علمی زیادی هم وجود دارد. ماساژ می‌
                                        تواند تجمع آب در بدن را بکاهد، اکسیژن
                                        رسانی به پوست را بالا ببرد و آن را سفت
                                        تر کند. ماساژ باعث می شود که عضلات شما
                                        به سمت بالا قرار بگیرند و بتوانند موقعیت
                                        بهتری داشته باشند.
                                    </div>
                                </div>
                                <div className='more'>
                                    <span>بیشتر</span>
                                    <i
                                        className='fa fa-chevron-left'
                                        aria-hidden='true'
                                    ></i>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='last-article'>
                        <a href='#'>
                            <div className='last-article-img-content'>
                                <img
                                    className='last-article-img'
                                    src='./img/articleLast3.jpeg'
                                    alt='رنگ مو'
                                ></img>
                            </div>
                            <div className='last-article-data'>
                                <div className='last-article-content'>
                                    <h3>رنگ مو ترند پاییز!</h3>
                                    <div className='last-article-head d-flex align-items-center'>
                                        <div className='last-article-head-avatar text-center'>
                                            <img
                                                src='./img/writer2.png'
                                                alt='نویسنده'
                                                width='128'
                                                height='128'
                                            />
                                        </div>
                                        <div className='last-article-head-body'>
                                            <h4>مهسا حیدری</h4>
                                            <span>1399-04-04</span>
                                           
                                        </div>
                                    </div>
                                    <div>
                                        {' '}
                                        اگر به دنبال رنگ موی مناسب برای فصل
                                        پاییز هستید، انتخاب های زیادی پیش روی
                                        شماست. قطعاً بعد از چند ماه دیگر رنگ
                                        موهای پاییزی به بازار می‌ آید. سالن های
                                        آرایشی نیز می‌ توانند رنگ موهای مختلف را
                                        برای شما ایجاد کنند.
                                    </div>
                                </div>
                                <div className='more'>
                                    <span>بیشتر</span>
                                    <i
                                        className='fa fa-chevron-left'
                                        aria-hidden='true'
                                    ></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LastArticles;
