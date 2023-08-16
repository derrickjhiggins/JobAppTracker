import React from 'react';
import LogRow from './LogRow.js';

function LogTable({ music, onDeleteSong, onEditSong }) {
    return (
        <table id="music">
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
