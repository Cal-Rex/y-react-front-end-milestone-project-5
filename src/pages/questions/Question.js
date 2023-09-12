import React from 'react';
import styles from '../../styles/Question.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Question = (props) => {
    const {
        id, title, image, content,
        is_owner, owner, profile_id, profile_image,
        comments_count, likes_count, liked_id,
        date_created, date_updated,
        questionPage,
    } = props;

    const currentUser = useCurrentUser();

    return <Card className={styles.Post}>
        <Card.Body>
            <Media className='align-items-center justify-content-between'>
                <Card.Title>{title}</Card.Title>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} height={50} />
                    {owner}
                </Link>
                <div className='d-flex align-items-top'>
                    <span>{date_created}</span>
                    {date_created === date_updated ? null : <span>Edited: {date_updated}</span>}
                    {questionPage && is_owner && "..."}
                </div>
            </Media>
        </Card.Body>
        {
            image &&
            <Link to={`/posts/${id}`}>
            <Card.Img src={image} alt={`image for question: ${title}`} />
            </Link>
        }
        <Card.Body className='d-flex align-items right'>
        {
            is_owner ? (
            <OverlayTrigger placement="bottom" overlay={<Tooltip>You can't like your own question, Narcissus.</Tooltip>}>
                <i class="fa-regular fa-heart fa-lg"></i>
            </OverlayTrigger>
            ) : liked_id ? (
                <span onClick={() => {}}>
                    <i class="fa-solid fa-heart fa-lg"></i>
                </span>
            ) : currentUser ? (
                <span onClick={() => {}}>
                    <i class="fa-regular fa-heart fa-lg"></i>
                </span>
            ) : (
                <Link to="/login">
                    <i class="fa-regular fa-heart fa-lg"></i>
                </Link>
            )
        }
        {likes_count}
        <Link to={`/posts/${id}`}>
            <i class="fa-regular fa-message fa-lg"></i>
        </Link>
        {comments_count}
        </Card.Body>
        <Card.Body>
            {content && <Card.Text>{content}</Card.Text>}
        </Card.Body>
    </Card>
}

export default Question