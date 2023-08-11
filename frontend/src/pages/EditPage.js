import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditPage = ({ song }) => {
    const [artist, setArtist] = useState(song.artist);
    const [title, setTitle] = useState(song.title);
    const [rating, setRating] = useState(song.rating);
    const [releaseYear, setReleaseYear] = useState(song.releaseYear.slice(0, 10));

    const navigate = useNavigate();

    const onEditSong = async () => {
        const response = await fetch(`/log/${song._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                artist: artist,
                title: title,
                rating: rating,
                releaseYear: releaseYear
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            navigate("/log");
            alert("Successfully edited the song.");
        } else {
            const errMessage = await response.json();
            navigate("/log");
            alert(`Failed to update the song. Status ${response.status}. ${errMessage}.`)
        }
    };

    return (
        <>
        <h2>Edit a Song</h2>
        <article>
            <p>Use this page to edit a song in the collection. You may edit any piece of information necessary, and save your changes..</p>
            <table id="music">
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><label for="artist" class="required">
                        <input type="text" value={artist} id="artist"
                        onChange={e => setArtist(e.target.value)}
                        />
                            </label></td>

                        <td><label for="songname" class="required">
                            <input type="text" value={title} id="songname"
                            onChange={e => setTitle(e.target.value)}
                            />
                            </label></td>
                        
                        <td><label for="rating" class="required">
                        <input type="number" value={rating} id="rating"
                        onChange={e => setRating(e.target.value)}
                        />
                            </label></td>

                        <td><label for="releaseYear" class="required">
                        <input type="date" value={releaseYear} id="releaseYear"
                        onChange={e => setReleaseYear(e.target.value)}
                        pattern="\d(2}-\d{2}-\d{2}"
                        />
                            </label></td>
                        <td><button className="wait" onClick={onEditSong}>Save Song</button></td>
                    </tr>
                </tbody>
            </table>
        </article>
        </>
    )
}

export default EditPage;