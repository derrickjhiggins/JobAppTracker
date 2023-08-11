import React from 'react';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";


function LogRow({ song, onDeleteSong, onEditSong }) {
    return (
        <>
        <tr>
            <td><FaRegTrashAlt onClick={() => onDeleteSong(song._id)} title="Delete a song."/></td>
            <td><FaEdit onClick={() => onEditSong(song)} title="Edit your song choice."/></td>
            <td title="Who is the artist of the song?" >{song.artist}</td>
            <td title="What is the title of the song?" >{song.title}</td>
            <td title="What is your rating for the song?" >{song.rating}</td>
            <td title="What is the release year of the song?" >{song.releaseYear}</td>
        </tr>
        </>
    )
}

export default LogRow;