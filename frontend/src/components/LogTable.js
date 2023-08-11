import React from 'react';
import LogRow from './LogRow.js';

function LogTable({ music, onDeleteSong, onEditSong }) {
    return (
        <table id="music">
            <caption>Add and Edit Music</caption>
            <thead>
                <tr>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th>Artist</th>
                    <th>Title</th>
                    <th>Rating</th>
                    <th>Release Year</th>
                </tr>
            </thead>
            <tbody>
                {music.map((song, i) => 
                    <LogRow 
                        song={song} 
                        key={i}
                        onDeleteSong={onDeleteSong}
                        onEditSong={onEditSong} 
                    />)}
            </tbody>
        </table>
    );
}

export default LogTable;
