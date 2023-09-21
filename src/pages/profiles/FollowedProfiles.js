import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Asset from '../../components/Asset';
import Profile from './Profile';
import { useProfileData } from '../../contexts/ProfileDataContext';
import styles from '../../styles/FollowedProfiles.module.css';

const FollowedProfiles = ({ desktop }) => {
    const { popularProfiles } = useProfileData();

    return (
        <Container className={`${desktop && 'd-sm-none'} ${styles.ProfileContainer}`}>
            <Row>
                <Col xs={12}>
                    <hr className={styles.Rule} />
                </Col>
                <Col className={styles.profileScrollLock} xs={12}>
                    <div className={styles.Profiles}>
                        {popularProfiles.results.length ? (
                            popularProfiles.results.map(profile => (
                                <Profile key={profile.id} profile={profile} />
                            ))
                        ) : (
                            <Asset loader />
                        )}
                    </div>
                </Col>
                <Col xs={12}>
                    <hr className={styles.Rule} />
                </Col>
            </Row>
        </Container>
    );
};

export default FollowedProfiles;