import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import { axiosReq, axiosRes } from '../../api/axiosDefault';
import Question from './Question';
import styles from '../../styles/QuestionPage.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import PostCommentForm from '../comments/PostCommentForm';
import Comment from '../comments/Comment';


function QuestionPage() {
    const { id } = useParams();
    const [question, setQuestion] = useState({ results: [] });
    const currentUser = useCurrentUser();
    const profileImage = currentUser?.profile_image;
    const [comments, setComments] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: question }] = await Promise.all([
                    axiosReq.get(`/posts/${id}`),
                ])
                setQuestion({ results: [question] })
                const [{data: commentsData}] = await Promise.all([
                    axiosReq.get(`/comments/?post=${id}`)
                ])
                setComments({...comments, results: [...commentsData.results] });
                console.log(commentsData)
                console.log(commentsData.results)
            } catch (err) {
                console.log(err)
            }
        }
        handleMount();
    }, [id])

    return (
        <Container fluid className={styles.QuestionContainer}>
            <Row>
                <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    <Question {...question.results[0]} setQuestion={setQuestion} questionPage />
                    {currentUser ? (
                        <PostCommentForm
                            profile_id={currentUser.profile_id}
                            profile_image={profileImage}
                            post={id}
                            setQuestions={setQuestion}
                            setComments={setComments}
                        />
                    ) : comments.results.length ? (
                        "Comments"
                    ) : null}
                    {comments.results.length ? (
                        comments.results.map(comment => {
                            return <Comment 
                                key={comment.id}
                                {...comment}
                                post={id}
                                setQuestion={setQuestion}
                                setComments={setComments}
                        />
                    })
                    ) : currentUser ? (
                        <span>This question needs answered, make your pitch.</span>
                    ) : (
                        <span>Log in to contribute to this question</span>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default QuestionPage