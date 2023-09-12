import { Button, Image, InputGroup } from 'react-bootstrap';
import react, { useRef, useState } from 'react';
import styles from '../../styles/PostQuestionForm.module.css'
import btnStyles from '../../styles/Button.module.css'
import { Alert, Col, Container, Form, Row } from 'react-bootstrap';
import Asset from '../../components/Asset';
import upload from '../../assets/upload.webp'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefault'

const PostQuestionForm = () => {
    const imageUpload = useRef(null);
    const history = useHistory()
    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        image: '',
    })
    const { title, content, image } = postData;

    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        })
    }

    const handleUpdateImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image)
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0]),
            })
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', imageUpload.current.files[0]);
        formData.append('content', content);
        try {
            const { data } = await axiosReq.post('/posts/', formData)
            history.push(`/posts/${data.id}`)
        } catch (err) {
            console.log(err)
            if (err.response?.data) {
                setErrors(err.response?.data)
            }
        }
    }

    return (
        <Container>
            <Row>
                <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>

                    <Form onSubmit={handleSubmit}>
                        {errors?.title?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        <Form.Group controlId="title">
                            <Form.Label className='d-none'>Question</Form.Label>
                            <Form.Control
                                className={`${styles.Title} ${styles.InputField}`}
                                type="text"
                                name="title"
                                placeholder='Question...'
                                value={title}
                                onChange={handleChange}
                                notRequired
                            />
                        </Form.Group>

                        <Form.Group>
                            {image ? (
                                <>
                                    <figure className="text-center">
                                        <Image src={image} />
                                    </figure>
                                    <div>
                                        <Form.Label
                                            htmlFor="upload-image"
                                            className='d-flex justify-content-center'
                                        >
                                            <span className={`${btnStyles.Btn} ${styles.ChangeImageBtn}`}>Change Image</span>
                                        </Form.Label>
                                    </div>
                                </>
                            ) : (
                                <Form.Label htmlFor="upload-image" className='d-flex justify-content-center'>
                                    <Asset src={upload} message={"Tap to upload an Image"} className={styles.Upload} />
                                </Form.Label>
                            )}
                            <Form.File
                                id="upload-image"
                                ref={imageUpload}
                                name="image"
                                onChange={handleUpdateImage}
                                accept="image/*"
                                className='d-none'
                            />
                        </Form.Group>
                        {errors?.image?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="content">
                            <Form.Label className='d-none'>Content</Form.Label>
                            <Form.Control
                                className={styles.InputField}
                                as="textarea"
                                rows={3}
                                name="content"
                                placeholder='Story time...'
                                value={content}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors?.content?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        <Form.Group className={styles.RightAlign}>
                            <Button variant="primary" type="submit" className={`${btnStyles.Btn}`}>
                                Submit
                            </Button>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default PostQuestionForm