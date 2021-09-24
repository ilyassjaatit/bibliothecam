import React from 'react';
import {Route, useRouteMatch,  Switch, BrowserRouter} from "react-router-dom";

import {Layout} from '../components/layout/Layout'
import {ListBook, DetailBook} from '../components/book'

const Book = (match) => {
    const {path} = useRouteMatch();
    return (
        <Layout>
            <Route path={`${path}/:bookId`} component={DetailBook}/>
            <Route exact path={path} component={ListBook}/>
        </Layout>
    );
};
export {Book} ;