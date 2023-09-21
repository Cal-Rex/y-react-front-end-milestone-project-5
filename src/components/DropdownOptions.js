import React from 'react';
import { Dropdown } from "react-bootstrap"
import styles from '../styles/Dropdown.module.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


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

const ProfileEditToggle = React.forwardRef(({ onClick }, ref) => (
    <i
        className='fa-solid fa-pen-to-square'
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

// dropdown from Code institute
export function ProfileEditDropdown({ id }) {
    const history = useHistory();
    return (
      <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
        <Dropdown.Toggle as={ProfileEditToggle} />
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => history.push(`/profiles/${id}/edit`)}
            aria-label="edit-profile"
          >
            <i className="fas fa-edit" /> Edit Profile
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => history.push(`/profiles/${id}/edit/username`)}
            aria-label="edit-username"
          >
            <i className="far fa-id-card" />
            Change Username
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => history.push(`/profiles/${id}/edit/password`)}
            aria-label="edit-password"
          >
            <i className="fas fa-key" />
            Change Password
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }