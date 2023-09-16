import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { axiosReq } from '../../api/axiosDefault';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Asset from '../../components/Asset';

const FollowedProfiles = () => {
    const [loaded, setLoaded] = useState(false);
    const [profileData, setProfileData] = useState({
        pageProfile: { results: [] },
        followedProfiles: { results: [] },
    });
    const { followedProfiles } = profileData;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(
                    `/profiles/?owner__following__followed__profile=${currentUser.profile_id}`
                );
                setProfileData((prevState) => ({
                    ...prevState,
                    followedProfiles: data,
                }))
            } catch (err) {
                console.log(err)
            }
        }
        setLoaded(false);
        handleMount();
        console.log("current user: ", currentUser);
        console.log(profileData);
        setLoaded(true);
    }, [currentUser]);

    return (
        <Container>
            <Row>
                <Col>
                    {loaded ? (
                        followedProfiles.results.length ? (
                            followedProfiles.results.map(profile => (
                                <p key={profile.id}>{profile.owner}</p>
                            ))
                        )
                        : (<p>no profiles followed yet...</p>)
                    ) : (<Asset loader />)}
                </Col>
            </Row>
        </Container>
    );
}

export default FollowedProfiles