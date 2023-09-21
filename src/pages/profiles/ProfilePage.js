import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../styles/ProfilePage.module.css";
import btnStyles from "../../styles/Button.module.css"
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { axiosRes, axiosReq } from "../../api/axiosDefault";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";
import FollowedProfiles from "./FollowedProfiles";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import Question from "../questions/Question";
import { fetchMoreData } from "../../utils/Utils";
import Comment from "../comments/Comment";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ProfileEditDropdown } from "../../components/DropdownOptions";

const ProfilePage = () => {
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();
    const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;
    const [profilePosts, setProfilePosts] = useState({ results: [] });
    const [profileComments, setProfileComments] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === profile?.username;


    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: pageProfile }, { data: profilePosts }, { data: profileComments }] = await Promise.all([
                    axiosReq.get(`/profiles/${id}/`),
                    axiosReq.get(`/posts/?owner__profile=${id}`),
                    axiosReq.get(`/comments/?ordering=-votes_count&owner__profile=${id}`)
                ]);

                setProfileData((prevState) => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] },
                }));

                setProfilePosts(profilePosts);

                setProfileComments(profileComments);

                setLoaded(true);
                console.log("ProfilePage.js pageProfile: ", pageProfile);
                console.log("ProfilePage.js profilePosts: ", profilePosts);
                console.log("ProfilePage.js profileComments: ", profileComments);
            } catch (err) {
                console.log(err);
                setLoaded(true);
            }

        };
        setLoaded(false);
        handleMount();
    }, [id, setProfileData,]);



    const profileCard = (
        <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
            <Row>
                <Col lg={12} className={styles.Head}>
                    <div><Image className={styles.Image} src={profile?.image} height={100} /></div>
                    {profile?.owner}
                    {profile?.is_owner && <span> <ProfileEditDropdown id={profile?.id} /></span>}

                    {profile?.is_owner ? (<></>) : (
                        <div>
                            {currentUser && !is_owner && (profile?.following_id ? (
                                <Button variant="primary" className={`${btnStyles.Btn}`}
                                    onClick={() => handleUnfollow(profile)}
                                >
                                    Unfollow
                                </Button>
                            ) : (
                                <Button variant="primary" className={`${btnStyles.Btn}`}
                                    onClick={() => handleFollow(profile)}
                                >
                                    Follow
                                </Button>
                            ))}
                        </div>
                    )}
                </Col>
                <Col className={styles.Bio} xs={12}>
                    {profile?.bio}
                </Col>
                <Col xs={6} className={styles.Stats}>
                    <div>Questions</div>
                    {profile?.posts_count}
                </Col>
                <Col xs={6} className={styles.Stats}>
                    <div>Answers</div>
                    {profile?.comments_count}
                </Col>
                <Col xs={6} className={styles.Stats}>
                    <div>Following</div>
                    {profile?.following_count}
                </Col>
                <Col xs={6} className={styles.Stats}>
                    <div>Followers</div>
                    {profile?.followers_count}
                </Col>
                <Col xs={12}>
                    <hr />
                    <h6 className={styles.Head}><i class="fa-solid fa-star"></i> Best Answer <i class="fa-solid fa-star"></i></h6>

                    <div className={styles.TopComment}>
                        <Link className={styles.TopCommentPost} to={`/posts/${profileComments.results[0]?.post}/`}>
                            {profileComments.results.length ? (
                                <>
                                    <h5 className={styles.TopCommentHeader}>{profileComments.results[0]?.post_title} </h5>
                                    <Comment {...profileComments.results[0]} />
                                </>
                            ) : (
                                <Asset loader />
                            )}
                        </Link>
                    </div>

                </Col>
                <Col xs={12}>
                    <hr />
                    {profilePosts.results.length ? (
                        <InfiniteScroll
                            children={profilePosts.results.map((post) => (
                                <Question key={post.id} {...post} setQuestion={setProfilePosts} />
                            ))}
                            dataLength={profilePosts.results.length}
                            loader={<Asset loader />}
                            hasMore={!!profilePosts.next}
                            next={() => fetchMoreData(profilePosts, setProfilePosts)}
                        />
                    ) : (
                        <Asset loader />
                    )}
                </Col>
            </Row>
        </Col>
    );

    return (
        <Row>
            {loaded ? (
                profileCard
            ) : (
                <Asset loader />
            )}
        </Row>
    );
};

export default ProfilePage;
