import React from "react";
import { Form, Button, Card, Container, Alert  } from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
 

export default function Login() {
    return(
        <>
            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center md-4">Log In</h2>
                            <Form>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"/>
                                </Form.Group>
                                <Button className="w-100" type="submit">Log In</Button>
                            </Form>
                            <div className="w-100 text-center mt-2">
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    );
}