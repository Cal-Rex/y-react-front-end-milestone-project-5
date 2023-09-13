import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import { axiosReq } from '../../api/axiosDefault';
import Question from './Question';
import styles from '../../styles/QuestionPage.module.css'

function QuestionPage() {
    const {id} = useParams();
    const [questions, setQuestions] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: questions}] = await Promise.all([
                    axiosReq.get(`/posts/${id}`),
                ])
                setQuestions({results: [questions]})
            } catch (err) {
                console.log(err)
            }
        }
        handleMount();
    }, [id])

    return (
        <Container fluid className={styles.QuestionContainer}>
            <Row>
                <Col xs={{span: 12}} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    <Question {...questions.results[0]} setQuestions={setQuestions} questionPage />
                </Col>
            </Row>
        </Container>
    )
}

export default QuestionPage