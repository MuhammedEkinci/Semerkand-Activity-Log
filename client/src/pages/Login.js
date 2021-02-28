import React, {Component} from "react";
import { Form, Button, Card, Container, Alert  } from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
 

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
          };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    onSubmit = e => {
        e.preventDefault();
            
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);
    };

    render() {
        const { errors } = this.state;
        return(
            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center md-4">Log In</h2>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" 
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        id="email"
                                    />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" 
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        id="password"
                                    />
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
        );
    }
}


export default Login;

