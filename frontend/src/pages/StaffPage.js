import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js"

function StaffPage() {
    const [staffResults, setStaffResults] = useState([]);
    const fetchResults = () => {
        fetch("https://randomuser.me/api/?results=10")
        .then((response) => response.json())
        .then((response) => {
            setStaffResults(response.results);
        })
        .catch(() => {
            alert("Uh-oh. The Random User Generator seems to not be working at the moment. Better try again later!")
        });
    };
    return (
        <>
        <article>
        <h2>Staff List</h2>
            <p>Here you can generate random person (staff) data using the <a href="https://randomuser.me/">Random User Generator</a> website. This will call the API of the website to generate random, fake staff information, and the results will be displayed in a table below. Click the button below to try for yourself!</p>
            <p>Generate 10 users
                <button id="genFromBrowser" onClick={fetchResults} value="Call from the browser."> here</button>.
            </p>
            <table>
                <caption>Name, email, phone, and location</caption>
                <thead>
                    <tr>
                        <th>Portrait</th>
                        <th>Name and Email</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody id="randomUser">
                    {staffResults.map((person, i) => <StaffRow person={person} key={i} />)}
                </tbody>
            </table>
        </article>
        </>
    )
}

export default StaffPage;