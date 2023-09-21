import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { axiosReq } from '../../api/axiosDefault';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import FollowedProfiles from './FollowedProfiles';
import NoResult from '../../assets/no-result.webp'
import { useQuery } from '../../contexts/SearchContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import Asset from '../../components/Asset';
import { fetchMoreData } from '../../utils/Utils';
import Profile from './Profile';
import styles from '../../styles/ProfileList.module.css'

const ProfileList = ({ message, filter }) => {
    const [profiles, setProfiles] = useState({ results: [] });
    const [loaded, setLoaded] = useState(false);
    const { pathname } = useLocation();
    const query = useQuery();

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const { data } = await axiosReq.get(`/profiles/?${filter}&search=${query}`);
                setProfiles(data);
                setLoaded(true);
            } catch (err) {
                // console.log(err);
            }
        }
        setLoaded(false);
        fetchProfiles();
    }, [query, pathname, filter])

    return (
        loaded ? ( 
        <Container>
            <Row>
                <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    <h5><i class="fa-solid fa-people-pulling fa-xl"></i> Followed Profiles</h5>
                    <FollowedProfiles />
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    <h5><i class="fa-solid fa-person-circle-question fa-xl"></i> Discover Profiles</h5>
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    {profiles.results.length ? (
                        <InfiniteScroll
                            dataLength={profiles.results.length}
                            loader={<Asset loader />}
                            hasMore={!!profiles.next}
                            next={() => fetchMoreData(profiles, setProfiles)}
                            endMessage={<div style={{ textAlign: 'center' }}><p>That's all, Batman</p></div>}
                        >
                            {profiles.results.map(profile => (
                                <div className={styles.ProfileListItem}><Profile key={profile.id} profile={profile} listView /></div>
                            ))}
                        </InfiniteScroll>
                    ) : <Asset src={NoResult} message={message} />}
                </Col>
            </Row>
        </Container>
        ) : (<Asset loader />)
    )
}

export default ProfileList