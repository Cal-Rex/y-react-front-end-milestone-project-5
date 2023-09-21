import { Button, Image } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/PostQuestionForm.module.css'
import btnStyles from '../../styles/Button.module.css'
import { Alert, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefault'
import { useRedirect } from '../../hooks/useRedirect';
import Asset from '../../components/Asset';

const EditQuestionForm = () => {
    useRedirect('loggedOut');
    const [loaded, setLoaded] = useState(true);
    const { id } = useParams();
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
        setLoaded(false);
        const maxFileSize = 2 * 1024 * 1024;
        if (imageUpload.current.files[0]?.size > maxFileSize) {
            setErrors({ image: ['Image filesize is too big, buddy. take it for a haircut or pick another image.'] });
            setLoaded(true);
            return;
        }
        
        if (title.trim() === '') {
            setErrors({ title: ['You at least need a title!'] });
            setLoaded(true);
            return;
          }

        const formData = new FormData();
        if (imageUpload?.current?.files[0]) { formData.append('image', imageUpload.current.files[0]); }
        formData.append('title', title);
        formData.append('content', content);
        try {
            await axiosReq.put(`/posts/${id}`, formData)
            history.push(`/posts/${id}`)
        } catch (err) {
            // console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data)
            }
        }
    }

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/posts/${id}/`)
                const { title, content, image, is_owner } = data;
                if (is_owner) {
                    setPostData({ title, content, image })
                } else { history.push('/') }
            } catch (err) {
                // console.log(err);
            }
        };
        handleMount();
    }, [history, id]);

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
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <>
                                <figure className="text-center">
                                    <Image src={image} fluid />
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

                        {loaded ? (
                            <Form.Group className={styles.RightAlign}>
                            <Button variant="primary" type="submit" className={`${btnStyles.Btn}`}>
                                Update
                            </Button>
                        </Form.Group>
                        ) : (<Asset loader />)}
                        

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default EditQuestionForm