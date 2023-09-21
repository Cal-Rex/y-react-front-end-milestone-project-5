import React, { useState } from 'react'
import { axiosRes } from '../../api/axiosDefault';
import { Button, Form, InputGroup } from 'react-bootstrap';
import btnStyles from '../../styles/Button.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';
import styles from '../../styles/Form.module.css'
import cmntStyles from '../../styles/PostCommentForm.module.css'

function PostCommentForm(props) {
    const { profile_id, profile_image, post, setComments } = props;
    const [ content, setContent ] = useState("");

    const handleChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axiosRes.post("/comments/", { post, content })
            setComments((prevComments) => ({
                ...prevComments,
                results: [data, ...prevComments.results],
            }));
            setContent("");
        } catch (err) {}
    };

    return (
        <Form className={styles.CommentForm} onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup>
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} />
                    </Link>
                    <Form.Control className={`${styles.Fields} ${cmntStyles.Form}`}
                        placeholder="comment..."
                        as="textarea"
                        value={content}
                        onChange={handleChange}
                        rows={2} 
                    />
                </InputGroup>
            </Form.Group>
            <Button variant="primary" type="submit" className={`${btnStyles.Btn}`}>
                Submit
            </Button>
        </Form>
    );
}

export default PostCommentForm