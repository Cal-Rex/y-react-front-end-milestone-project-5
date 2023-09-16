import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefault";
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from '../../styles/Button.module.css'
import { Button } from "react-bootstrap";

function EditCommentForm(props) {
  const { id, post, content, setShowEditForm, setComments } = props;

  const [formData, setFormData] = useState(content);

  const handleChange = (event) => {setFormData(event.target.value)};

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData.trim());
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formData.trim(),
        post: post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formData.trim(),
                date_updated: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          as="textarea"
          value={formData}
          onChange={handleChange}
          rows={1}
        />
      </Form.Group>
      <div>
        <Button variant="primary" className={`${btnStyles.Btn}`} onClick={() => setShowEditForm(false)}>
            Cancel
        </Button>
        <Button variant="primary" type="submit" className={`${btnStyles.Btn}`} disabled={!content.trim()}>
            Update
        </Button>
      </div>
    </Form>
  );
}

export default EditCommentForm;