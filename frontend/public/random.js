'use strict';

function showPersonTable(person) {
    randomUser.innerHTML += `
    <tr>
        <td><img src=${person.picture.thumbnail} alt=Random Staff Photo></td>
        <td>
            <a href="mailto:${person.email}">
            ${person.name.first}
            ${person.name.last}</a>
        </td>
        <td>${person.phone})</td>
        <td>${person.location.city}</td>
    </tr>
    `;
}

async function getRandomUser(event) {
    //event.preventDefault();
    const targetId = event.target.getAttribute('id');
    const url = targetId === 'fromBrowser' ? "https://randomuser.me/api/": "/random-person"
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.status == 200) {
            showPersonTable(data.results[0]);
        }
    } catch (error) {
        console.error(error)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const fromBrowserLink = document.getElementById('genFromBrowser');
    fromBrowserLink.addEventListener('click', getRandomUser);
    const fromServerLink = document.getElementById('genFromExpress');
    fromServerLink.addEventListener('click', getRandomUser);
});