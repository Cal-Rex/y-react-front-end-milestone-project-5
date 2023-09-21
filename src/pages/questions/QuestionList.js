import React, { useEffect, useState } from 'react'
import styles from '../../styles/QuestionList.module.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefault';
import { Col, Container, Row } from 'react-bootstrap';
import Loader from '../../assets/loader/Loader';
import Question from './Question';
import Asset from '../../components/Asset';
import NoResult from '../../assets/no-result.webp'
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoreData } from '../../utils/Utils';
import FollowedProfiles from '../profiles/FollowedProfiles';
import { useQuery } from '../../contexts/SearchContext';
import { useSetLoadStatus } from '../../contexts/LoadContext';

const QuestionList = ({ message, filter }) => {
    const [questions, setQuestions] = useState({ results: [] });
    const [loadStatus, setLoadStatus] = useState(false);
    const setContextLoadStatus = useSetLoadStatus();
    const { pathname } = useLocation();
    const query = useQuery();

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const { data } = await axiosReq.get(`/posts/?${filter}&search=${query}`);
                setQuestions(data);
                setLoadStatus(true);
                setContextLoadStatus(true);
            } catch (err) {
            }
        }
        setContextLoadStatus(false);
        setLoadStatus(false);
        fetchQuestions();
    }, [query, pathname, filter, setContextLoadStatus]);

    return (
        <Container fluid className={styles.QuestionContainer}>
            <Row>
                <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    <FollowedProfiles />
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    {loadStatus ? (
                        <>
                            {questions.results.length
                                ? (
                                    <InfiniteScroll
                                        dataLength={questions.results.length}
                                        loader={<Asset loader />}
                                        hasMore={!!questions.next}
                                        next={() => fetchMoreData(questions, setQuestions)}
                                        endMessage={<div style={{ textAlign: 'center' }}><p>You've reached the end!</p></div>}
                                    >
                                        {questions.results.map((question) => (
                                        <Question key={question.id} {...question} setQuestions={setQuestions} questionCard />))}
                                    </InfiniteScroll>
                                ) : <Asset src={NoResult} message={message} />
                            }
                        </>
                    ) : (<Loader />)}
                </Col>
                <Col md={{ span: 2 }}>
                    <FollowedProfiles desktop />
                </Col>
            </Row>
        </Container>
    )
}

export default QuestionList