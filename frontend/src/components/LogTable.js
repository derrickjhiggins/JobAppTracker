import React from 'react';
import LogRow from './LogRow.js';

function LogTable({ applications, onDeleteApplication, onEditApplication }) {
    return (
        <table id="applications">
            <caption>Add and Edit Job Applications</caption>
            <thead>
                <tr>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th>Company</th>
                    <th>Position Title</th>
                    <th>Salary</th>
                    <th>Start Date</th>
                </tr>
            </thead>
            <tbody>
                {applications.map((application, i) => 
                    <LogRow 
                        application={application} 
                        key={i}
                        onDeleteApplication={onDeleteApplication}
                        onEditApplication={onEditApplication} 
                    />)}
            </tbody>
        </table>
    );
}

export default LogTable;
