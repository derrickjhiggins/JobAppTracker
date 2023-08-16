import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreatePage = () => {
    const [artist, setArtist] = useState('Company Name');
    const [title, setTitle] = useState('Position Title');
    const [rating, setRating] = useState(0);
    const [releaseYear, setReleaseYear] = useState(0);

    const navigate = useNavigate();

    const addSong = async () => {
        const newSong = { artist, title, rating, releaseYear };

        const response = await fetch('/log', {
            method: 'POST',
            body: JSON.stringify(newSong),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201) {
            alert("Successfully added a new song.")
        } else {
            alert('Failed to add a application entry. The response error code is: ')
            alert(response.status)
        }
        navigate("/log");
    };

    return (
        <>
        <h2>Log a Song</h2>
        <article>
            <p>Add a new application to the log here.</p>
            <table id="music">
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
                        <td><label htmlFor="artist" className="required">
                        <input type="text" value={artist} id="artist"
                        onChange={(e) => setArtist(e.target.value)}
                        />
                            </label></td>

                        <td><label htmlFor="songname" className="required">
                            <input type="text" value={title} id="songname"
                            onChange={(e) => setTitle(e.target.value)}
                            />
                            </label></td>
                        
                        <td><label htmlFor="rating" className="required">
                        <input type="number" value={rating} id="rating"
                        onChange={(e) => setRating(e.target.value)}
                        />
                            </label></td>

                        <td><label htmlFor="releaseYear" className="required">
                        <input type="date" value={releaseYear} id="releaseYear"
                        onChange={(e) => setReleaseYear(e.target.value)}
                        />
                            </label></td>
                        <td><button className="wait" onClick={addSong}>Save Song</button></td>
                    </tr>
                </tbody>
            </table>
        </article>
        </>
    )
}

export default CreatePage;