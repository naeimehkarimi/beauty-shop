import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../common/Header';
import Footer from '../common/Footer';

const MainLayout = (props) => {
    return (
        <Fragment>
            <Helmet>
                <title>بیوتی شاپ</title>
            </Helmet>
            <Header />
            {props.children}
            <Footer />
        </Fragment>
    );
};

export default withRouter(MainLayout);
