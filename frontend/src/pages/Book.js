import React from 'react';
import {Route, useRouteMatch} from "react-router-dom";

import {Layout} from '../components/layout/Layout'
import {ListBook, DetailBook} from '../components/book'

const Book = () => {
    const [books, setBooks] = React.useState([
        {
            "id":1,
            "name": "Lorem Ipsum 1",
            "img": "https://via.placeholder.com/286x180",
            "category": "Lorem Ipsum 1",
            "editorial": "Lorem Ipsum",
            "language": "Spanish",
            "ISBN": "236734623874238",
            "yearOfPublication": "1889",
            "shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            "id":2,
            "name": "Lorem Ipsum 2",
            "img": "https://via.placeholder.com/286x180",
            "category": "Lorem Ipsum 1",
            "editorial": "Lorem Ipsum 1",
            "language": "English",
            "ISBN": "236734653874238",
            "yearOfPublication": "2000",
            "shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
    ]);
    const {path} = useRouteMatch();
    return (
        <Layout>
            <Route path={`${path}/:bookId`} component={DetailBook}/>
            <Route exact path={path}>
            <ListBook books={books} setBooks={setBooks} />
            </Route>
        </Layout>
    );
};
export {Book} ;