import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import { axiosReq } from '../../api/axiosDefault';

function QuestionPage() {
    const {id} = useParams();
    const [question, setQuestion] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: question}] = await Promise.all([
                    axiosReq.get(`/posts/${id}`),
                ])
                setQuestion({results: [question]})
                console.log(question)
            } catch (err) {
                console.log(err)
            }
        }
        handleMount();
    }, [id])

    return (
        <Container>
            <Row>
                <Col>post
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default QuestionPage