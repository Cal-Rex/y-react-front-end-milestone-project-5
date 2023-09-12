return <Card className={styles.QuestionObject}>
<Card.Body>
    <Media className={styles.QuestionObjectMedia}>
        <Container fluid className={styles.QuestionHead}>
            <Row>
                <Col xs={10}>
                    <div><Card.Title>{title}</Card.Title></div>
                </Col>
                <Col className={styles.HeadRightCol}>
                    {questionPage && is_owner && "..."}
                </Col>
            </Row>
            <Row>
                <Col xs={9}>
                    <Link className={styles.QuestionAvatar} to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={35} /> <span className={styles.ProfileName}>{owner}</span>
                    </Link>
                </Col>
                <Col>
                    <div className={styles.HeadRightCol}>
                        <span>{date_created}</span>
                        {date_created === date_updated ? null : <span>Edited: {date_updated}</span>}
                    </div>
                </Col>
            </Row>
        </Container>
    </Media>
</Card.Body>
{
image &&
<Link to={`/posts/${id}`}>
    <Card.Img src={image} alt={`image for question: ${title}`} />
</Link>
}
<Card.Body className='d-flex align-items right'>
{
    is_owner ? (
        <OverlayTrigger placement="bottom" overlay={<Tooltip>You can't like your own question, Narcissus.</Tooltip>}>
            <i class="fa-regular fa-heart fa-lg"></i>
        </OverlayTrigger>
    ) : liked_id ? (
        <span onClick={() => { }}>
            <i class="fa-solid fa-heart fa-lg"></i>
        </span>
    ) : currentUser ? (
        <span onClick={() => { }}>
            <i class="fa-regular fa-heart fa-lg"></i>
        </span>
    ) : (
        <Link to="/login">
            <i class="fa-regular fa-heart fa-lg"></i>
        </Link>
    )
}
{likes_count}
<Link to={`/posts/${id}`}>
    <i class="fa-regular fa-message fa-lg"></i>
</Link>
{comments_count}
</Card.Body>
<Card.Body>
{content && <Card.Text>{content}</Card.Text>}
</Card.Body>
</Card>