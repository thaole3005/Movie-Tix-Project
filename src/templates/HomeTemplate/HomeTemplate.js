import React from 'react'
import { Fragment, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';

export default function HomeTemplate(props) {
    const {Component, ...restProps} = props;
    return (
        <Route {...restProps} render = {(propsRoute) => {
            return <Fragment>
                <Header/>
                <Component {...propsRoute}/>
                {/* <Footer/>  */}
            </Fragment>
        }}/>
    )
}
