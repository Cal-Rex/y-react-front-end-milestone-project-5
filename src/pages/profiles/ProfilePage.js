import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../styles/ProfilePage.module.css";
import { Container, Col, Row, Image } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { axiosRes, axiosReq } from "../../api/axiosDefault";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";

const ProfilePage = () => {
    const [loaded, setLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const setProfileData = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: pageProfile }] = await Promise.all([
                    axiosReq.get(`/profiles/${id}/`)
                ]);
                setProfileData((prevState) => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] },
                }));
                setLoaded(true); 
            } catch (err) {
                console.log(err);
                setLoaded(true);
            }
            console.log("ProfilePage.js pageProfile: ", pageProfile);
        };
        setLoaded(false);
        handleMount();
    }, [id, setProfileData]);

    return (
        <Container>
            <Row>
                <Col>
                    <Avatar src={profile?.image} />
                    "Name"<span>edit button</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    "Questions"
                    {profile?.posts_count}
                </Col>
                <Col>
                    "Answers"
                </Col>
            </Row>
            <Row>
                <Col>
                    "Following"
                </Col>
                <Col>
                    "Followers"
                </Col>
            </Row>
            <Row>
                <Col>
                    "best answer"
                </Col>
            </Row>
            <Row>
                <Col>
                    "Posts by user"
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;
