import { Button } from 'bootstrap';
import react, { useState } from 'react';
import btnStyles from '../../styles/Button.module.css'
import { Form, Row } from 'react-bootstrap';

const PostQuestionForm = () => {
    const [errors, setErrors] = useState({});

    const PostTitle = (
        <>placeholder</>
    )

    const PostContent = (

        <Button variant="primary" type="submit" className={btnStyles.Btn} activeClassName={styles.BtnActive}>Post</Button>
    )

  return (
    <Form>
        <Row>
            <Col>
            <Container>
                <Form.Group>
                    <Form.Label htmlFor="image-upload">
                        <i class="fa-solid fa-arrow-up-from-bracket fa-xl"></i>
                    </Form.Label>
                </Form.Group>
            </Container>
            </Col>
        </Row>
    </Form>
  )
}

export default PostQuestionForm