import React, { useState, useEffect } from 'react'
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
        date_created, date_updated,
        post, content,
        votes_count, voted_on_id,
        id, setQuestion, setComments,
    } = props;
    const [showEditForm, setShowEditForm] = useState(false);
    const currentUser = useCurrentUser();
    const edited = date_created !== date_updated;

    useEffect(() => {
        // console.log(props)
    }, [props])

    const handleVote = async () => {
        try {
            const {data} = await axiosRes.post('/votes/', {comment:id})
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.map((comment) => {
                    return comment.id === id 
                    ? {
                        ...comment,
                        votes_count: comment.votes_count + 1,
                        voted_on_id: data.id
                    } : comment
                })
            }))
        } catch (err) {
            console.log(err);
        }
    }

    const handleUnvote = async () => {
        try {
            await axiosRes.delete(`/votes/${voted_on_id}`);
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.map((comment) => {
                    if (comment.id === id) {
                        const updatedVotesCount = isNaN(comment.voted_on_count) 
                            ? 0 
                            : comment.voted_on_count - 1;
                        return {
                            ...comment,
                            votes_count: updatedVotesCount,
                            voted_on_id: null
                        };
                    } else {
                        return comment;
                    }
                })
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`)
            setQuestion(prevQuestion => ({
                results: [{
                    ...prevQuestion.results,
                    comments_count: prevQuestion.results[0].comments_count - 1
                }]
            }))
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
            <hr />
            <Media>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <Media.Body>
                    <span>{owner}</span>
                    {edited
                        ? (<><span>{date_updated}</span> <span>Edited</span></>)
                        : (<span>{date_created}</span>)
                    }
                    {showEditForm ? (
                        <EditCommentForm
                            id={id} content={content} post={post}
                            profile_image={profile_image} profile_id={profile_id}
                            setComments={setComments} setShowEditForm={setShowEditForm} />
                    ) : (
                        <p>{content}</p>
                    )}
                </Media.Body>
                {voted_on_id ? (
                    <span onClick={handleUnvote} className={styles.Interaction}>
                        <i className="fa-solid fa-circle-check fa-xl"></i>
                    </span>
                ) : currentUser ? (
                    <span onClick={handleVote} className={styles.Interaction}>
                        <i className="fa-regular fa-circle-check fa-xl"></i>
                    </span>
                ) : (
                    <Link to="/login">
                        <span onClick={() => { }} className={styles.Interaction}>
                        <i className="fa-regular fa-circle-check fa-xl"></i>
                        </span>
                    </Link>
                )} {votes_count}
                {is_owner && !showEditForm && (
                    <DropdownOptions
                        handleEdit={() => setShowEditForm(true)} handleDelete={handleDelete} />
                )}
            </Media>
        </div>
    )
}

export default Comment