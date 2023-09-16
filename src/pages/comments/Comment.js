import React, { useState } from 'react'
import styles from '../../styles/Comment.module.css'
import { Media } from 'react-bootstrap'
import Avatar from '../../components/Avatar'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { DropdownOptions } from '../../components/DropdownOptions'
import { axiosRes } from '../../api/axiosDefault'
import EditCommentForm from './EditCommentForm'

const Comment = (props) => {
    const {
        is_owner, profile_id, profile_image, owner, 
        created_at, updated_at,
        post, content,
        id, setQuestion, setComments,
    } = props;
    const [showEditForm, setShowEditForm] = useState(false);
    
    const edited = created_at !== updated_at;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`)
            setQuestion(prevQuestion => ({
                results: [{
                    ...prevQuestion.results,
                    comments_count: prevQuestion.results[0].comments_count - 1
                }]
            }))
            // after the delete function is complete, the `setComments`
            // function runs through all of the comments in the state and then returns
            // all comments that have an id that DOES NOT match the comment just deleted,
            // thus removing it from the state when the function is complete
            setComments(prevComments => ({
                ...prevComments,
                results: prevComments.results.filter(comment => comment.id !== id)
            }))
        } catch (err) {
            console.log(err)
        }
    }


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
                {showEditForm ? (
                    <EditCommentForm 
                        id={id} content={content} post={post}
                        profile_image={profile_image} profile_id={profile_id}
                        setComments={setComments} setShowEditForm={setShowEditForm}/>
                ) : (
                    <p>{content}</p>
                )}
            </Media.Body>
            {is_owner && !showEditForm && (
                <DropdownOptions 
                    handleEdit={() => setShowEditForm(true)} handleDelete={handleDelete}/>
            )}
        </Media>
    </div>
  )
}

export default Comment