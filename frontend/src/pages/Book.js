import React from 'react';
import {Route, useRouteMatch} from "react-router-dom";

import {Layout} from '../components/layout/Layout'
import {ListBook, DetailBook} from '../components/book'
import {BookProvider} from "../components/book/BookContext";
import "../components/book/book.scss"

const Book = () => {
    const {path} = useRouteMatch();
    return (
        <BookProvider>
            <Layout>
                <Route path={`${path}/:bookId`} component={DetailBook}/>
                <Route exact path={path}>
                    <ListBook/>
                </Route>
            </Layout>
        </BookProvider>
    );
};
export {Book};
