import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreatePage = () => {
    const [company, setCompany] = useState('Company Name');
    const [position, setPosition] = useState('Position Title');
    const [salary, setSalary] = useState(0);
    const [startDate, setStartDate] = useState(0);

    const navigate = useNavigate();

    const addApplication = async () => {
        const newApplication = { company, position, salary, startDate };

        const response = await fetch('/log', {
            method: 'POST',
            body: JSON.stringify(newApplication),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201) {
            alert("Successfully added a new application.")
        } else {
            alert('Failed to add an application entry. The response error code is: ')
            alert(response.status)
        }
        navigate("/log");
    };

    return (
        <>
        <h2>Log an Application</h2>
        <article>
            <p>Add a new application to the log here.</p>
            <table id="application">
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Company</td>
                        <td>Position Title</td>
                        <td>Salary</td>
                        <td>Start Date</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><label htmlFor="company" className="required">
                        <input type="text" value={company} id="company"
                        onChange={(e) => setCompany(e.target.value)}
                        />
                            </label></td>

                        <td><label htmlFor="position" className="required">
                            <input type="text" value={position} id="position"
                            onChange={(e) => setPosition(e.target.value)}
                            />
                            </label></td>
                        
                        <td><label htmlFor="salary" className="required">
                        <input type="number" value={salary} id="salary"
                        onChange={(e) => setSalary(e.target.value)}
                        />
                            </label></td>

                        <td><label htmlFor="startDate" className="required">
                        <input type="date" value={startDate} id="startDate"
                        onChange={(e) => setStartDate(e.target.value)}
                        />
                            </label></td>
                        <td><button className="wait" onClick={addApplication}>Save Application</button></td>
                    </tr>
                </tbody>
            </table>
        </article>
        </>
    )
}

export default CreatePage;