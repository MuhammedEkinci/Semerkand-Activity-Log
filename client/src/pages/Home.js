import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { Form, Button, Card, Container, Alert, Modal  } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/style.css";

import PageHeader from "../components/PageHeader";
import ActivityTable from "../components/ActivityTable";

class Home extends Component {


    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {

        const { user } = this.props.auth;

        return (
            <div className="create-activity-section">
                <Container>
                    <PageHeader />

                    <section className="section-area" id="add-activity-area">
                        <Link to="/create-activity" className="btn btn-primary waves-effect">Add Activity</Link>
                    </section>

                    <section className="section-area" id="add-activity-area">
                        <ActivityTable />                    
                    </section>
                </Container>
            </div>
        );
    }
}

Home.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Home);