import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LogTable from '../components/LogTable';
import { AiFillFileAdd } from "react-icons/ai";

function LogPage({ setApplication }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [applications, setApplications] = useState([]);

    // RETRIEVE the entire list of music
    const loadApplications = async () => {
        const response = await fetch('/log');
        const applications = await response.json();
        setApplications(applications);
    } 
    

    // UPDATE a single song
    const onEditApplication = application => {
        setApplication(application);
        redirect("/edit-application");
    }

    // DELETE a single song  
    const onDeleteApplication = async _id => {
        const response = await fetch(`/log/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/log');
            const application = await getResponse.json();
            setApplications(application);
        } else if (response.status === 200) {
            const getResponse = await fetch('/log');
            const application = await getResponse.json();
            setApplications(application);
        }   else {
            console.error(`Failed to delete application with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the music
    useEffect(() => {
        loadApplications();
    }, []);

    // DISPLAY the music
    return (
        <>
            <h2>Job Application Tracker</h2>
            <LogTable 
                applications={applications} 
                onEditApplication={onEditApplication} 
                onDeleteApplication={onDeleteApplication}
            />
            <Link to="/add-application">
              <AiFillFileAdd />
            </Link>
        </>
    );
}

export default LogPage;