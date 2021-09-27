import React from "react"
import Select from 'react-select'

const SelectCategory = ({onChange}) => {
    const category_options = [{value: '1', label: 'Action and Adventure'}]
    return (<Select onChange={onChange} options={category_options}/>)
}
export {SelectCategory}
