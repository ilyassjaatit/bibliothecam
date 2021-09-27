import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Select from 'react-select'

const BookForm = ({bookData}) => {
    if (!bookData) {
        bookData = {
            "title": "",
            "publication_year": "",
            "description": "",
            "category": "",
            "front_cover": "",
            "back_cover": "",
            "language": "Arabic"
        }
    }
    const [book, setNewBook] = React.useState(bookData)
    const category_options = [{value: '1', label: 'Action and Adventure'}]
    const onSubmit = (event) => {
        event.preventDefault()
        let formData = new FormData();
        formData.append("title", book.title)
        formData.append("publication_year", book.publication_year)
        formData.append("description", book.description)
        formData.append("category", book.category)
        formData.append("front_cover", book.front_cover,book.front_cover.name )
        formData.append("back_cover", book.back_cover,book.back_cover.name )
        formData.append("language", "en")
        console.log(book.language)
        fetch('http://localhost:8000/api/libraries/books/', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(success => window.location.reload(false))
            .catch(error => console.log(error));

    }
    const onChangeSelect = (event) => {
        setNewBook({...book, "category": event.value})
    }
    const onChange = (event) => {
        let id = event.target.id

        if (id === "bookFormTitle") {
            setNewBook({...book, "title": event.target.value})
        } else if (id === "bookFormPublicationYear") {
            setNewBook({...book, "publication_year": event.target.value})
        } else if (id === "bookFormDescription") {
            setNewBook({...book, "description": event.target.value})
        } else if (id === "bookFormFrontCover") {
            setNewBook({...book, "front_cover": event.target.files[0]})
        } else if (id === "formFileBackCover") {
            setNewBook({...book, "back_cover": event.target.files[0]})
        }

    }
    return (
        <React.Fragment>
            <br/>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="bookFormTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" onChange={onChange} value={book.title} type="text"
                                  placeholder="Alice's Adventures in Wonderland"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="bookFormPublicationYear">
                    <Form.Label>Publication Year</Form.Label>
                    <Form.Control onChange={onChange} value={book.publication_year} type="text"
                                  placeholder="1865"/>
                </Form.Group>
                <Form.Group className="mb-3" onChange={onChange} controlId="bookFormDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="description" rows={3}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Select onChange={onChangeSelect} options={category_options}/>
                </Form.Group>
                <Form.Group onChange={onChange} controlId="bookFormFrontCover" className="mb-3">
                    <Form.Label>Frontend cover</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group onChange={onChange} controlId="formFileBackCover" className="mb-3">
                    <Form.Label>Backend cover</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <br/>
        </React.Fragment>
    );
};
export {BookForm} ;
