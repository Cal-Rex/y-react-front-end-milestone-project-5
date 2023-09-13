import React, { useEffect, useState } from 'react'
import styles from '../../styles/QuestionList.module.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { axiosReq } from '../../api/axiosDefault';
import { Col, Container, Row } from 'react-bootstrap';
import Loader from '../../assets/loader/Loader';
import Question from './Question';
import Asset from '../../components/Asset';
import NoResult from '../../assets/no-result.webp'

const QuestionList = ({ message, filter = "" }) => {
    const [questions, setQuestions] = useState({ results: [] });
    const [loadStatus, setLoadStatus] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const { data } = await axiosReq.get(`/posts/?${filter}`);
                setQuestions(data);
                setLoadStatus(true);
            } catch (err) {
                console.log(err)
            }
        }
        setLoadStatus(false);
        fetchQuestions();
    }, [filter, pathname]);
    return (
        <Container fluid className={styles.QuestionContainer}>
            <Row>
                <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    {loadStatus? (
                        <>
                        {questions.results.length
                            ? questions.results.map(question => (
                                <Question key={question} {...question} setQuestions={setQuestions} />
                            ))
                            : <Asset src={NoResult} message={message} />
                        }
                        </>
                    ) : (<Loader />)}
                </Col>
            </Row>
        </Container>
    )
}

export default QuestionList