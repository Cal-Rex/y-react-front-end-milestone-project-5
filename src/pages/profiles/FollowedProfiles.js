import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { axiosReq } from '../../api/axiosDefault';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Asset from '../../components/Asset';
import Profile from './Profile'
import { useProfileData } from '../../contexts/ProfileDataContext';
import styles from '../../styles/FollowedProfiles.module.css'

const FollowedProfiles = ({ desktop }) => {
    const [loaded, setLoaded] = useState(false);
    const { popularProfiles } = useProfileData();

    return (
        <Container className={`${desktop && 'd-sm-none'} ${styles.ProfileContainer}`}>
            <Row>
                <Col xs={12}>
                    <hr className={styles.Rule} />
                </Col>
                <Col className={styles.Profiles} xs={12}>
                    {popularProfiles.results.length ? (
                        popularProfiles.results.map(profile => (
                            <Profile key={profile.id} profile={profile} />
                        ))
                    ) : (
                        <Asset loader />
                    )}
                </Col>
                <Col xs={12}>
                    <hr className={styles.Rule} />
                </Col>
            </Row>
        </Container>
    );
}

export default FollowedProfiles