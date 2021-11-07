import React from 'react'
//react bootstrap components
import { FormControl, InputGroup} from 'react-bootstrap'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
//css
import classes from './HeaderForm.module.css';

const HeaderForm = (props) => {
    return (
        <>
            <InputGroup className={classes.FormWrapper}>
                <FormControl
                    placeholder="search blog"
                    aria-label="search"
                    aria-describedby="search_bar"
                    onChange={props.setSearchText}
                    value={props.searchText}
                />
                <Link to={`/search/${props.searchText}`} className={`btn btn-dark ${classes.Link}`}>
                    <FaSearch />
                </Link>
            </InputGroup>
        </>
    )
}

export default HeaderForm;
