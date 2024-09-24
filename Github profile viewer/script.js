function fetchProfile() {
    const username = document.getElementById('username').value;

    if (!username) {
        alert('Enter a Github username');
        return;
    }

    // Fetch profile and repos together using Promise.all
    Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos`)
    ])
    .then(([response, repoResponse]) => {
        // Check if both responses are OK
        if (!response.ok || !repoResponse.ok) {
            throw new Error('Network response was not ok');
        }
        // Return both JSON responses
        return Promise.all([response.json(), repoResponse.json()]);
    })
    .then(([profileData, reposData]) => {
        // Display profile and repositories
        displayProfile(profileData);
        displayRepos(reposData);
    })
    .catch(err => {
        console.error('There was a problem with the fetch operation:', err);
    });
}

function displayProfile(profileData) {
    const profileElement = document.getElementById('profile');
    profileElement.innerHTML = `
        <h2>${profileData.login}</h2>
        <img src="${profileData.avatar_url}" style="width:100px;height:100px; border-radius:50%"/>
    `;
}
//This is the Addational Code which Added Repositeries Of the User to Display
function displayRepos(reposData) {
    const reposElement = document.getElementById('repos');
    
    if (reposData.length === 0) {
        reposElement.innerHTML = '<p>No repositories found.</p>';
        return;
    }

    // This code creats the display the repositories in the list format 
    const reposList = reposData.map(repo => {
        return `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
    }).join('');
    
    reposElement.innerHTML = `<h3>Repositories:</h3><ul>${reposList}</ul>`;
}
