import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../styles/ProfilePage.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Avatar from "../../components/Avatar"
import { axiosRes, axiosReq } from "../../api/axiosDefault";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const ProfilePage = () => {
    const [loaded, setHasLoaded] = useState(false);
    const [profileData, setProfileData] = useState({ results: [] })
    const currentUser = useCurrentUser();
    const { id } = useParams();

    // useEffect(() => {
    //     const handleMount = async () => {
    //         try {
    //             const [{ data: profile }] = await Promise.all([
    //                 axiosReq.get(`/profiles/${id}/`)
    //             ]);
    //             setProfileData((prevState) => ({
    //                 ...prevState,
    //                 page
    //             })
    //             );
    //         } catch (err) {
    //             console.log(err);
    //         }
    //         console.log(profileData)
    //     }
    //     setHasLoaded(false);
    //     handleMount();
    //     setHasLoaded(true);
    // }, [])


  return (
    <Container>
        <Row>
            <Col>
                <Avatar />
                "Name"<span>edit button</span>
            </Col>
        </Row>
        <Row>
            <Col>
                "Questions"
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
  )
}

export default ProfilePage