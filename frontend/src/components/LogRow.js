import React from 'react';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";


function LogRow({ application, onDeleteApplication, onEditApplication }) {
    const formattedStartDate = application.startDate.substring(0, 10);
    return (
        <>
        <tr>
            <td><FaRegTrashAlt onClick={() => onDeleteApplication(application._id)} title="Delete an application."/></td>
            <td><FaEdit onClick={() => onEditApplication(application)} title="Edit your application."/></td>
            <td title="Who is the artist of the song?" >{application.company}</td>
            <td title="What is the title of the song?" >{application.position}</td>
            <td title="What is your rating for the song?" >{application.salary}</td>
            <td title="What is the release year of the song?" >{formattedStartDate}</td>
        </tr>
        </>
    )
}

export default LogRow;