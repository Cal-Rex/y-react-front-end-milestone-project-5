import { Button } from 'bootstrap';
import react, { useState } from 'react';
import styles from '../../styles/PostQuestionForm.module.css'
import btnStyles from '../../styles/Button.module.css'
import { Col, Container, Form, Row } from 'react-bootstrap';
import Asset from '../../components/Asset';
import upload from '../../assets/upload.webp'

const PostQuestionForm = () => {
    const [errors, setErrors] = useState({});

    const PostTitle = (
        <>placeholder</>
    )

    const PostContent = (

        <Button variant="primary" type="submit" className={btnStyles.Btn}>Post</Button>
    )

    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="upload-image" className='d-flex justify-content-center'>
                                <Asset src={upload} message={"Tap to upload an Image"} className={styles.Upload}/>
                            </Form.Label>
                            <Form.File id="upload-image" accept="image/*" className='d-none'/>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default PostQuestionForm