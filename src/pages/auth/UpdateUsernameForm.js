import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefault";
import {useCurrentUser, useSetCurrentUser} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import formStyles from "../../styles/Form.module.css";


// Code Supplied by Code Institute Walkthrough
const UpdateUsernameForm = () => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const { id } = useParams();

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  useEffect(() => {
    if (currentUser?.profile_id?.toString() === id) {
      setUsername(currentUser.username);
    } else {
      history.push("/");
    }
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put("/dj-rest-auth/user/", {
        username,
      });
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
      }));
      history.goBack();
    } catch (err) {
      // console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={formStyles.Form}>
          <Form onSubmit={handleSubmit} className="my-2">
            <Form.Group>
              <Form.Label>Change username</Form.Label>
              <Form.Control className={formStyles.Fields}
                placeholder="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
              className={`${btnStyles.Btn}`}
              onClick={() => history.goBack()}
            >
              Cancel
            </Button>
            <Button
              className={`${btnStyles.Btn}`}
              type="submit"
            >
              Save
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default UpdateUsernameForm;