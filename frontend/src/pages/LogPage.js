import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LogTable from '../components/LogTable';
import { AiFillFileAdd } from "react-icons/ai";

function LogPage({ setSong }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [music, setMusic] = useState([]);

    // RETRIEVE the entire list of music
    const loadMusic = async () => {
        const response = await fetch('/log');
        const music = await response.json();
        setMusic(music);
    } 
    

    // UPDATE a single song
    const onEditSong = song => {
        setSong(song);
        redirect("/edit-music");
    }

    // DELETE a single song  
    const onDeleteSong = async _id => {
        const response = await fetch(`/log/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/log');
            const music = await getResponse.json();
            setMusic(music);
        } else if (response.status === 200) {
            const getResponse = await fetch('/log');
            const music = await getResponse.json();
            setMusic(music);
        }   else {
            console.error(`Failed to delete application with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the music
    useEffect(() => {
        loadMusic();
    }, []);

    // DISPLAY the music
    return (
        <>
            <h2>Job Application Tracker</h2>
            <LogTable 
                music={music} 
                onEditSong={onEditSong} 
                onDeleteSong={onDeleteSong}
            />
            <Link to="/add-music">
              <AiFillFileAdd />
            </Link>
        </>
    );
}

export default LogPage;