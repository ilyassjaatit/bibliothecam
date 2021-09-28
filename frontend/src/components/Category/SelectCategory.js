import React, {useEffect, useState} from "react"
import Select from 'react-select'
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const AddButton = () => {
    return (<Button>Add new Category</Button>)
}

const SelectCategory = ({onChange}) => {
    const [categories, setCategories] = useState({});
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [addButton, setAddButton] = useState(false);
    const options_Categories = []
    options_Categories.push({value:null , label: "Select an option"})
    const handleChange = (event) => {
        if(event.value == null) {
            setAddButton(true)
        } else {
            setAddButton(false)
        }
        return onChange(event)
    }
    useEffect(() => {
        const base_url_books = process.env.REACT_APP_API_ENDPOIN + "libraries/categories/"
        fetch(base_url_books)
            .then(res => res.json())
            .then(
                (result) => {
                    setTimeout(function () {
                        setIsLoaded(true);

                        for (const property in result) {
                           let  {id, name} = result[property]
                            options_Categories.push({value:id , label: name})
                            console.log()
                        }
                        setCategories(options_Categories);
                    }, 500);

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <Spinner animation="border"/>
    } else {
        return (
            <Row>
                <Col md={6}>
                    <Select onChange={handleChange} options={categories}/>
                </Col>

                <Col md={6}>
                    { addButton ? <AddButton/> : null }
                </Col>
            </Row>

        )
    }
}
export {SelectCategory}
