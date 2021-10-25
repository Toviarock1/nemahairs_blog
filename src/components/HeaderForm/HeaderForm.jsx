import React from 'react'
//react bootstrap components
import { FormControl, InputGroup, Button } from 'react-bootstrap'
import { FaSearch } from "react-icons/fa";
//css
import classes from './HeaderForm.module.css';

const HeaderForm = () => {
    return (
        <>
            <InputGroup className={classes.FormWrapper}>
                <FormControl
                    placeholder="search blog"
                    aria-label="search"
                    aria-describedby="search_bar"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    <FaSearch />
                </Button>
            </InputGroup>
        </>
    )
}

export default HeaderForm;
