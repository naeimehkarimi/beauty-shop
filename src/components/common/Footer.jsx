import React, { Fragment } from 'react';
import { Accordion, Card, NavLink } from 'react-bootstrap';
import ScrollToTop from 'react-scroll-up';

const Footer = () => {
    return (
        <Fragment>
            <footer>
                <ScrollToTop
                    showUnder={0}
                    className='to-top  position-fixed visible'
                    style={{ zIndex: '100' }}
                >
                    <button className='to-top-button p-0 border-0 bg-transparent'>
                        <img
                            src='./img/scrolltopcircle.png'
                            alt='برگشت به بالا'
                        />
                    </button>
                </ScrollToTop>
                <div className='container-fluid'>
                    {/* <div className='row justify-content-center py-3 first-footer-section'>
                        <div className='col  text-center '>
                            <img
                                alt='ضمانت اصالت کالا'
                                src='./img/orginal.png'
                            />
                            <h4 className='mt-2 '>ضمانت اصل بودن کالا</h4>
                        </div>
                        <div className='col text-center'>
                            <img
                                alt='ضمانت بازگشت'
                                src='./img/return.png'
                            />
                            <h4 className='mt-2'>7 روز ضمانت بازگشت کالا</h4>
                        </div>
                        <div className='col text-center'>
                            <img
                                alt='ارسال سریع'
                                src='./img/fast-sending.png'
                            />
                            <h4 className='mt-2'>ارسال سریع</h4>
                        </div>
                    </div> */}
                    <div className='row justify-content-center py-5 social-footer-section'>
                        <div className='col-md-6 col-sm-12 text-center'>
                            <span>ما را درشبکه های اجتماعی زیر دنبال کنید</span>
                            <div className='mt-3'>
                                <a href='#' className='mx-3 aparat'>
                                    <img alt='آپارات' src='./img/aparat.png' />
                                </a>
                                <a href='#' className='mx-3'>
                                    <img
                                        alt='فیس بوک'
                                        src='./img/facebook.svg'
                                    />
                                </a>
                                <a href='#' className='mx-3'>
                                    <img
                                        alt='اینستاگرام'
                                        src='./img/instagram.svg'
                                    />
                                </a>
                                <a href='#' className='mx-3'>
                                    <img
                                        alt='تلگرام'
                                        src='./img/telegram.svg'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='col-sm-8 py-3 d-none d-sm-block links-footer-section text-right'>
                            <div className='row'>
                                <div className='col-3 '>
                                    <span className='links-heading'>
                                        آشنایی با ما
                                    </span>
                                    <a
                                        href='#'
                                        className='d-block pb-3 mt-3 link'
                                    >
                                        درباره ما
                                    </a>
                                    <a href='#' className='d-block link'>
                                        تماس با ما
                                    </a>
                                </div>
                                <div className='col-3 links-heading'>
                                    <span>خدمات مشتریان</span>
                                    <NavLink
                                        to='/login'
                                        className='d-block p-0 pb-3 mt-3 link'
                                    >
                                        ورود-عضویت
                                    </NavLink>
                                    <a href='#' className='d-block link'>
                                        راهنمای خرید
                                    </a>
                                </div>
                                <div className='col-3 links-heading'>
                                    <span className='mb-3'>حقوق و قوانین</span>
                                    <a
                                        href='#'
                                        className='d-block pb-3 mt-3 link'
                                    >
                                        قوانین و شرایط استفاده
                                    </a>
                                    <a href='#' className='d-block pb-3 link'>
                                        حفظ حریم خصوصی
                                    </a>
                                    <a href='#' className='d-block link'>
                                        تعویض یا ارجاع کالا
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4 py-2 d-none d-sm-block footer-images-section'>
                            <a href='#' className='ml-3'>
                                <img
                                    alt='ساماندهی'
                                    src='./img/samandehi-logo.png'
                                />
                            </a>
                            <a href='#' className='ml-3'>
                                <img
                                    alt='نماد اعتماد'
                                    src='./img/enamad-logo.png'
                                />
                            </a>
                        </div>
                    </div>
                    <div className='row  px-3 pt-3 d-none d-sm-block about-footer-section'>
                        <div className='col-sm-12  text-justify border-top border-gray px-0   py-2'>
                            <div className='row'>
                                <h3 className='pb-2 '> بیوتی شاپ</h3>
                                <p className='footer-about-text'>
                                    بیوتی شاپ به عنوان یک مرجع تخصصی زیبایی
                                    ماموریت نهایی برند خود را بر تشویق بانوان
                                    برای مراقبت از زیبایی منحصر بفردشان گذاشته
                                    است. معرفی و فروش آنلاین لوازم آرایشی و
                                    بهداشتی اصل در دسته بندی هایی از جمله انواع
                                    لوازم آرایش ؛ محصولات مراقبتی و زیبایی پوست
                                    ؛ محصولات مراقبتی و زیبایی مو و بدن ؛ انواع
                                    شامپو ؛ اسپری و ژل مو ؛ کیت رنگ مو و انواع
                                    اکسیدان ؛ حجم دهنده مو و انواع عطر و ادکلن ؛
                                    لوازم شخصی برقی در این فروشگاه انجام می
                                    گردد. خرید اینترنتی لوازم آرایش به صورت
                                    آنلاین از بیوتی شاپ به راحت ترین شکل قابل
                                    انجام می باشد.
                                </p>
                            </div>

                            <div className='row border-top border-gray py-2 px-0 copy-right'>
                                <span className='text-center w-100'>
                                    © 2019 کلیه حقوق این سایت متعلق به بیوتی شاپ
                                    می‌باشد.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='container-fluid row   mx-0 py-0 px-0  mt-0 after-footer-section '>
                <div className='col-sm-8 py-2  d-none d-sm-block text-right'>
                    <span>
                        ساعات پاسخگویی: شنبه تا چهارشنبه ۹ الی ۱۸:۰۰ / پنجشنبه ۹
                        الی ۱۷:۰۰
                    </span>
                    <span className=' mx-3 '>|</span>
                    <span>
                        <i
                            className='fa fa-headphones ml-2'
                            aria-hidden='true'
                        ></i>
                        <span className='ml-2'>تماس با ما</span>
                        <span>۴۷۰۸ - ۰۲۱</span>
                    </span>
                </div>
                <div className='col-sm-4  text-left my-auto d-none d-sm-block'>
                    <a className=' ml-3 '>
                        <i
                            className='fa fa-info-circle ml-2 '
                            aria-hidden='true'
                        ></i>
                        <span>راهنما</span>
                    </a>
                    <a>
                        <i
                            className='fa fa-question-circle ml-2'
                            aria-hidden='true'
                        ></i>
                        <span>سوالات متداول</span>
                    </a>
                </div>
                <div className='col-sm-12 col-xs-12 d-block d-sm-none px-0 '>
                    <Accordion className='text-right'>
                        <Card className='border-0 footer-card'>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey='0'
                                className='footer-card-header'
                            >
                                <span>آشنایی با ما</span>
                                <i className='fa fa-angle-down'></i>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey='0'>
                                <Card.Body className='footer-card-body'>
                                    <a href='#' className='d-block pb-3'>
                                        درباره ما
                                    </a>
                                    <a href='#' className='d-block '>
                                        تماس با ما
                                    </a>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='border-0 footer-card'>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey='1'
                                className='footer-card-header'
                            >
                                <span>خدمات مشتریان</span>
                                <i className='fa fa-angle-down'></i>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey='1'>
                                <Card.Body className='footer-card-body'>
                                    <NavLink
                                        tp='/login'
                                        className='d-block p-0 pb-3'
                                    >
                                        ورود-عضویت
                                    </NavLink>
                                    <a href='#' className='d-block'>
                                        راهنمای خرید
                                    </a>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='border-0 footer-card'>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey='2'
                                className='footer-card-header'
                            >
                                <span>حقوق و قوانین</span>
                                <i className='fa fa-angle-down'></i>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey='2'>
                                <Card.Body className='footer-card-body'>
                                    {' '}
                                    <a href='#' className='d-block pb-3'>
                                        قوانین و شرایط استفاده
                                    </a>
                                    <a href='#' className='d-block pb-3'>
                                        حفظ حریم خصوصی
                                    </a>
                                    <a href='#' className='d-block '>
                                        تعویض یا ارجاع کالا
                                    </a>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                <div className='col-sm-12 d-block d-sm-none text-center py-2 px-2 mob-about'>
                    <span className=' ml-3 float-right'>
                        <i
                            className='fa fa-headphones ml-2'
                            aria-hidden='true'
                        ></i>
                        <span className='ml-2'>تماس با ما</span>
                        <span>۴۷۰۸ - ۰۲۱</span>
                    </span>
                    <a className='float-left'>
                        <i
                            className='fa fa-question-circle ml-2'
                            aria-hidden='true'
                        ></i>
                        <span>سوالات متداول</span>
                    </a>
                </div>
                <div className='col-sm-12 d-block d-sm-none border-top border-gray py-2 px-0 mob-copy-right'>
                    <span>
                        © 2019 کلیه حقوق این سایت متعلق به بیوتی شاپ می‌باشد.
                    </span>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;
