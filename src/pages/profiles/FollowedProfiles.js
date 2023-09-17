import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { axiosReq } from '../../api/axiosDefault';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Asset from '../../components/Asset';
import Profile from './Profile'
import { useProfileData } from '../../contexts/ProfileDataContext';

const FollowedProfiles = ({ desktop }) => {
    const [loaded, setLoaded] = useState(false);
    const { popularProfiles } = useProfileData();

    return (
        <Container className={`${desktop && 'd-sm-none'}`}>
            <Row>
                <Col>
                    <p>most followed profiles</p>
                    {popularProfiles.results.length ? (
                        popularProfiles.results.map(profile => (
                            <Profile key={profile.id} profile={profile} />
                        ))
                    ) : (
                        <Asset loader />
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default FollowedProfiles