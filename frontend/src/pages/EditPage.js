import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditPage = ({ application }) => {
    const [company, setCompany] = useState(application.company);
    const [position, setPosition] = useState(application.position);
    const [salary, setSalary] = useState(application.salary);
    const [startDate, setStartDate] = useState(application.startDate.slice(0, 10));

    const navigate = useNavigate();

    const onEditApplication = async () => {
        const response = await fetch(`/log/${application._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                company: company,
                position: position,
                salary: salary,
                startDate: startDate
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            navigate("/log");
            alert("Successfully edited application.");
        } else {
            const errMessage = await response.json();
            navigate("/log");
            alert(`Failed to update application. Status ${response.status}. ${errMessage}.`)
        }
    };

    return (
        <>
        <h2>Edit an application</h2>
        <article>
            <table id="applications">
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><label for="company" className="required">
                        <input type="text" value={company} id="company"
                        onChange={e => setCompany(e.target.value)}
                        />
                            </label></td>

                        <td><label for="position" className="required">
                            <input type="text" value={position} id="position"
                            onChange={e => setPosition(e.target.value)}
                            />
                            </label></td>
                        
                        <td><label for="salary" className="required">
                        <input type="number" value={salary} id="salary"
                        onChange={e => setSalary(e.target.value)}
                        />
                            </label></td>

                        <td><label for="startDate" className="required">
                        <input type="date" value={startDate} id="startDate"
                        onChange={e => setStartDate(e.target.value)}
                        pattern="\d(2}-\d{2}-\d{2}"
                        />
                            </label></td>
                        <td><button className="wait" onClick={onEditApplication}>Save Application</button></td>
                    </tr>
                </tbody>
            </table>
        </article>
        </>
    )
}

export default EditPage;