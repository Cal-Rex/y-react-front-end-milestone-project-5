import React from 'react';
import styles from '../../styles/Question.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Card, Col, Container, Media, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRes } from '../../api/axiosDefault';
import { DropdownOptions } from '../../components/DropdownOptions';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


const Question = (props) => {
    const {
        id, title, image, content,
        is_owner, owner, profile_id, profile_image,
        comments_count, likes_count, liked_id,
        date_created, date_updated,
        questionCard, setQuestions
    } = props;

    const history = useHistory();

    const currentUser = useCurrentUser();

    const handleEdit = () => {
        history.push(`/posts/${id}/edit`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/posts/${id}/`);
          history.goBack();
        } catch (err) {
          console.log(err);
        }
      };

    const handleLike = async () => {
        try {
            const {data} = await axiosRes.post('/likes/', {post:id})
            setQuestions((prevQuestions) => ({
                ...prevQuestions,
                results: prevQuestions.results.map((question) => {
                    return question.id === id 
                    ? {
                        ...question,
                        likes_count: question.likes_count + 1,
                        liked_id: data.id
                    } : question
                })
            }))
        } catch (err) {
            console.log(err);
        }
    }

    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${liked_id}`)
            setQuestions((prevQuestions) => ({
                ...prevQuestions,
                results: prevQuestions.results.map((question) => {
                    return question.id === id 
                    ? {
                        ...question,
                        likes_count: question.likes_count - 1,
                        liked_id: null
                    } : question
                })
            }))
        } catch (err) {
            console.log(err);
        }
    }

    return <Card className={styles.QuestionObject}>
        <Card.Body>
            <Media className={styles.QuestionObjectMedia}>
                <Container fluid className={styles.QuestionHead}>
                    <Row>
                        <Col xs={10}>
                            <div><Card.Title>{title}</Card.Title></div>
                        </Col>
                        <Col className={styles.HeadRightCol}>
                            {questionCard 
                                && is_owner 
                                && <DropdownOptions 
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}
                                />
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={9}>
                            <Link className={styles.QuestionAvatar} to={`/profiles/${profile_id}`}>
                                <Avatar src={profile_image} height={35} /> <span className={styles.ProfileName}>{owner}</span>
                            </Link>
                        </Col>
                        <Col>
                            <div className={styles.HeadRightCol}>
                                <div>{date_created}</div>
                                {date_created === date_updated ? null : <div>Edited: {date_updated}</div>}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Media>
        </Card.Body>
        {
            image &&
            <Link to={`/posts/${id}`}>
                <Card.Img src={image} alt={`image for question: ${title}`} />
            </Link>
        }
        <Card.Body className={styles.QuestionMetrics}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.Metric}>
                            {likes_count} Likes
                        </div>
                        <div className={styles.Metric}>
                            {comments_count} Comments
                        </div>
                        <div className={styles.Metric}>
                            ... Votes
                        </div>
                    </Col>
                    <Col className={styles.Interactions}>
                        {
                            is_owner ? (
                                <OverlayTrigger placement="bottom" overlay={<Tooltip>You can't like your own question, Narcissus.</Tooltip>}>
                                    <span className={styles.Interaction}>
                                    <i className="fa-regular fa-heart fa-lg"></i>
                                </span>
                                </OverlayTrigger>
                            ) : liked_id ? (
                                <span onClick={handleUnlike} className={styles.Interaction}>
                                    <i className="fa-solid fa-heart fa-lg"></i>
                                </span>
                            ) : currentUser ? (
                                <span onClick={handleLike} className={styles.Interaction}>
                                    <i className="fa-regular fa-heart fa-lg"></i>
                                </span>
                            ) : (
                                <Link to="/login">
                                    <span onClick={() => { }} className={styles.Interaction}>
                                        <i className="fa-regular fa-heart fa-lg"></i>
                                    </span>
                                </Link>
                            )
                        }

                        <Link to={`/posts/${id}`}>
                            <span onClick={() => { }} className={styles.Interaction}>
                                <i className="fa-regular fa-message fa-lg"></i>
                            </span>
                        </Link>
                    </Col>
                </Row>
            </Container>


        </Card.Body>
        <Card.Body>
            {content && <Card.Text>{content}</Card.Text>}
        </Card.Body>
    </Card>
}

export default Question