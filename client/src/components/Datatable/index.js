import React from "react";
import {Table, Form, Col, CardColumns } from "react-bootstrap";

export default function Datatable({ data }) {
    const columns = data[0] && Object.keys(data[0]);
    return (
        <Table className="table table-lg" striped bordered responsive="sm">
            <thead>
                <tr>{data[0] && columns.map(heading => <th>{heading}</th>)}</tr>
            </thead>
            <tbody>
                {data.map((row) => (
                        <tr>
                            {columns.map((column) => (
                                <td>{row[column]}</td>
                            ))}
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
};