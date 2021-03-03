import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Table  } from "react-bootstrap";

class ActivityTable extends Component {

    state = {
        activitieList: [],
        activitieListFiltered: [],
        sorted: "ascend"
    };

    // Call API to retrieve activities from the database
    retrieveActivities = async () => {
        try {
            const res = await API.getActivities();
            const activities = res.data.results.map(act => ({
                branch: act.branch,
                country: act.country,
                activityType: act.activityType,
                date: act.date,
                time: act.time,
                subject: act.subject,
                speaker: act.speaker,
                gender: act.gender,
                ageGroup: act.ageGroup,
                numParticipants: act.numParticipants,
                hatmeType: act.hatmeType
            }));

            this.setState({activitieList: activities, activitieListFiltered: activities});

        } catch(err) {
            console.log(err);
        }
    };

    //call retrieveActivities
    componentDidMount() {
        this.retrieveActivities();
    }

    render(){
        return (
            <>
                <h1>This is where Activities will render</h1>
                <div>
                    <table className="table table-sm">
                        <tr>
                            <thead>
                                <th>Branch</th>
                                <th>Country</th>
                                <th>Activity</th>
                                <th>Participants</th>
                                <th>Subject</th>
                                <th>Speaker</th>
                                <th>Gender</th>
                                <th>AgeGroup</th>
                                <th>Hatme type</th>
                                <th>Date</th>
                                <th>Time</th>
                            </thead>
                            <tbody>
                                {this.state.activitieListFiltered.map(actInfo => {
                                    return(
                                        <tr key={actInfo.id}>
                                            <td>{actInfo.branch}</td>
                                            <td>{actInfo.country}</td>
                                            <td>{actInfo.activityType}</td>
                                            <td>{actInfo.numParticipants}</td>
                                            <td>{actInfo.subject}</td>
                                            <td>{actInfo.speaker}</td>
                                            <td>{actInfo.gender}</td>
                                            <td>{actInfo.ageGroup}</td>
                                            <td>{actInfo.hatmeType}</td>
                                            <td>{actInfo.date}</td>
                                            <td>{actInfo.time}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </tr>
                    </table>
                </div>
            </>
        );
    }
}

export default ActivityTable;
