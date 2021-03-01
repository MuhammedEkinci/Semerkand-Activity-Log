import React, {useState} from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import API from "../utils/API";
import {useHistory} from "react-router-dom";

export default function AddActivity() {

    const [branch, setBranch] = useState('');
    const [activity, setActivity] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [subject, setSubject] = useState('');
    const [speaker, setSpeaker] = useState('');
    const [gender, setGender] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [participants, setParticipants] = useState('');
    const [hatme, setHatme] = useState('');
    const [country, setCountry] = useState('');

    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Pressed");

        let newActivity = {
            branch: branch,
            country: country,
            activityType: activity,
            date: date,
            time: time,
            subject: subject,
            speaker: speaker,
            gender: gender,
            ageGroup: ageGroup,
            numParticipants: participants,
            hatmeType: hatme
        };

        console.log(newActivity);
        API.saveActivity(newActivity)
            .then(console.log("Saved Activity!!!"))
            .then(history.push("/home"))
            .catch((err) => console.log(err))
    }

    return (
        <>
            <h1 className="section-title" style={{textAlign: "center", marginTop: "2rem"}}>Add Activity</h1>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Form.Group id="branch">
                                <Form.Label>Branch</Form.Label>
                                <Form.Control as="select" onChange={e => setBranch(e.target.value)} value={branch}>
                                    <option></option>
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
                            </Form.Group>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Form.Group id="activity-type">
                                <Form.Label>Activity Type</Form.Label>
                                <Form.Control as="select" onChange={e => setActivity(e.target.value)} value={activity}>
                                    <option></option>
                                    <option>Sohet</option>
                                    <option>Hatme</option>
                                    <option>Derse</option>
                                    <option>K</option>
                                    <option>P</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Form.Group id="time">
                                <Form.Label>Activity Time</Form.Label>
                                <Form.Control placeholder="Ex: 10:00pm" onChange={e => setTime(e.target.value)} value={time}/>
                            </Form.Group>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Form.Group id="date">
                                <Form.Label>Activity Date</Form.Label>
                                <Form.Control placeholder="Ex: December 23, 2020" onChange={e => setDate(e.target.value)} value={date}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Form.Group id="subject">
                                <Form.Label>Sohbet Subject</Form.Label>
                                <Form.Control placeholder="Leave blank if activity is not sohbet" onChange={e => setSubject(e.target.value)} value={subject}/>
                            </Form.Group>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Form.Group id="speaker">
                                <Form.Label>Sohbet Speaker</Form.Label>
                                <Form.Control placeholder="Leave blank if activity is not sohbet" onChange={e => setSpeaker(e.target.value)} value={speaker}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Form.Group id="gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control as="select" onChange={e => setGender(e.target.value)} value={gender}>
                                    <option></option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Form.Group id="age-group">
                                <Form.Label>Age Group</Form.Label>
                                <Form.Control as="select" onChange={e => setAgeGroup(e.target.value)} value={ageGroup}>
                                    <option></option>
                                    <option>Adult</option>
                                    <option>Child</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Form.Group id="participants">
                                <Form.Label>Number of Participant</Form.Label>
                                <Form.Control placeholder="Ex: 20" onChange={e => setParticipants(e.target.value)} value={participants}/>
                            </Form.Group>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Form.Group id="hatme-type">
                                <Form.Label>Hatme Type</Form.Label>
                                <Form.Control as="select" onChange={e => setHatme(e.target.value)} value={hatme}>
                                    <option></option>
                                    <option>Big</option>
                                    <option>Small</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Form.Group id="country">
                                <Form.Label>Country</Form.Label>
                                <Form.Control as="select" onChange={e => setCountry(e.target.value)} value={country}>
                                    <option></option>
                                    <option>America</option>
                                    <option>Turkey</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit" className="btn btn-primary waves-effect waves-light" style={{float: "right"}}>Add Activity</Button>
                </Form>
            </Container>
        </>
    );

};