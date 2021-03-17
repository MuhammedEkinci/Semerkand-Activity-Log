import React, { Component, useEffect, useState } from "react";
import API from "../../utils/API";
import Datatable from "../Datatable";
import {Table, Row, Col} from "react-bootstrap";
import "./style.css";

function ActivityTable() {

    const [activities, setActivities] = useState([]);
    const [q, setQ] = useState("");// this state will hold the filtering options
    const [searchColumns, setSearchColumns] = useState(["branch", "country"]);

    useEffect(() => {
        getActivitiesToPost();
    }, []);

    // Get all the activities from database to display
    const getActivitiesToPost = () => {
        API.getActivities()
            .then(({data}) => setActivities(data))
            .catch((err) => console.log(err));
    };

    function searchActivity(rows){
        return rows.filter((row) => 
            searchColumns.some(
                (column) => 
                    row[column].toString().toLowerCase().indexOf(q.toLocaleLowerCase()) > -1)
        );
    }

    const columns = activities[0] && Object.keys(activities[0]);
    console.log(columns);

    return (
        <>
        {/* Table filter options*/}
        <div className="page-section" id="filter-table">
                <input id="activity-search" type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="search activity"></input>
                {
                    columns && columns.map(column => <label>
                        <input id="filter-checkbox" type="checkbox" checked={searchColumns.includes(column)}
                            onChange={(e) => {
                                const checked = searchColumns.includes(column)
                                setSearchColumns(prev => checked
                                    ? prev.filter(sc => sc !== column) : [...prev, column]);
                            }}
                        />
                        {column}
                    </label>)
                }
        </div>
        {/* Show Activity table*/}
        <div className="page-section" id="activity-table">
            <Datatable data={searchActivity(activities)}/>     
        </div>
        </>
    );
}

export default ActivityTable;
