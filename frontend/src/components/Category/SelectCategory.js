import React, {useEffect, useState} from "react"
import Select from 'react-select'
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const SelectCategory = ({onChange}) => {
    const [categories, setCategories] = useState({});
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const options_Categories = []
    options_Categories.push({value:null , label: "Select an option"})
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
                <Col>
                    <Select options={categories}/>
                </Col>
            </Row>
        )
    }
}
export {SelectCategory}
