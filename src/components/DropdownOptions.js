import React from 'react';
import { Dropdown } from "react-bootstrap"
import styles from '../styles/Dropdown.module.css'


// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const DropdownToggle = React.forwardRef(({ onClick }, ref) => (
    <i
        className='fas fa-ellipsis-v'
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    />
));


export const DropdownOptions = ({ handleEdit, handleDelete }) => {
    return (
        <Dropdown drop='left'>
            <Dropdown.Toggle as={DropdownToggle} />
            <Dropdown.Menu popperConfig={{ strategy: "fixed" }} className={styles.Menu}>
                <Dropdown.Item className={styles.Option} onClick={handleEdit} aria-label="edit">Edit <i className="fa-solid fa-pencil"></i></Dropdown.Item>
                <Dropdown.Item className={styles.Option} onClick={handleDelete} aria-label="delete">Delete <i className="fa-solid fa-eraser"></i></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}