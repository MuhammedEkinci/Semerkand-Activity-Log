import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, Button, Card, Container, Alert, Row, Col  } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions"
import classnames from "classnames";


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

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
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
        this.props.registerUser(newUser, this.props.history);
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
                                className={classnames("", {
                                    invalid: errors.name
                                })}
                            />
                            <span className="red-text">{errors.name}</span>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" 
                                    onChange={this.onChange} 
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    className={classnames("", {
                                        invalid: errors.email
                                    })}
                                />
                                <span className="red-text">{errors.email}</span>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Form.Label>Branch</Form.Label>
                            <Form.Control as="select" onChange={this.onChange} value={this.state.branch} error={errors.branch} id="branch" className={classnames("", { invalid: errors.phone })}>
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
                            <span className="red-text">{errors.branch}</span>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>phone</Form.Label>
                                <Form.Control placeholder="Phone" 
                                    onChange={this.onChange} 
                                    value={this.state.phone}
                                    error={errors.phone}
                                    id="phone"
                                    className={classnames("", {
                                        invalid: errors.phone
                                    })}
                                />
                                <span className="red-text">{errors.phone}</span>
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
                                    className={classnames("", {
                                        invalid: errors.password
                                    })}
                                />
                                <span className="red-text">{errors.password}</span>
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
                                    className={classnames("", {
                                        invalid: errors.password2
                                      })}
                                />
                                <span className="red-text">{errors.password2}</span>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit" className="btn btn-primary waves-effect waves-light">Register New User</Button>
                </Form>
            </div>
            );
    }
}

Admin.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };


const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Admin));