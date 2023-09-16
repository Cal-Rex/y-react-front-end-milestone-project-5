import React from 'react'
import styles from '../../styles/Comment.module.css'
import { Media } from 'react-bootstrap'
import Avatar from '../../components/Avatar'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { DropdownOptions } from '../../components/DropdownOptions'

const Comment = (props) => {
    const { is_owner, profile_id, profile_image, owner, created_at, updated_at, content, } = props;
    
    const edited = created_at !== updated_at;


  return (
    <div>
        <hr/>
        <Media>
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image}/>
            </Link>
            <Media.Body>
                <span>{owner}</span>
                {edited
                ? (<><span>{updated_at}</span> <span>Edited</span></>)
                : (<span>{updated_at}</span>)
                }
                <p>{content}</p>
            </Media.Body>
            {is_owner && (
                <DropdownOptions 
                    handleEdit={() => {}} handleDelete={() => {}}/>
            )}
        </Media>
    </div>
  )
}

export default Comment