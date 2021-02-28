import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Container, Alert, Row, Col  } from "react-bootstrap";


class Admin extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            branch: "",
            phone: "",
            password: "",
            password2: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            branch: this.state.branch,
            phone: this.state.phone,
            password: this.state.password,
            password2: this.state.password2
            };
        console.log(newUser);
    };
    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to
                            home
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Register New User</b> below
                            </h4>
                        </div>
                    </div>
                </div>
                <Form onSubmit={this.onSubmit}>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Name" 
                                onChange={this.onChange} 
                                value={this.state.name}
                                error={errors.name}
                                id="name"
                            />
                        </Col>
                        <Col lg={6} sm={12}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" 
                                    onChange={this.onChange} 
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Form.Label>Branch</Form.Label>
                            <Form.Control as="select" onChange={this.onChange} value={this.state.branch} error={errors.branch} id="branch">
                                <option>New Jersey</option>
                                <option>Deleware</option>
                                <option>Rochester</option>
                                <option>Arizona</option>
                                <option>Boston</option>
                                <option>Queens</option>
                                <option>Texas</option>
                                <option>Long Island</option>
                                <option>Chicago</option>
                                <option>Turkey</option>
                            </Form.Control>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>phone</Form.Label>
                                <Form.Control placeholder="Phone" 
                                    onChange={this.onChange} 
                                    value={this.state.phone}
                                    error={errors.phone}
                                    id="phone"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" 
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Re-Enter Password</Form.Label>
                                <Form.Control type="password" placeholder="Re-Enter Password" 
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit" className="btn btn-primary waves-effect waves-light">Register New User</Button>
                </Form>
            </div>
            );
    }
}
export default Admin;