function fetchProfile(){
    const username=document.getElementById('username').value
    if(!username){
        alert('Enter a Github username')
        return
    }
    fetch(`https://api.github.com/users/${username}`)
    .then(response=>{
        if(!response.ok){
            throw new Error('Network response is not ok')
        }
        return response.json();
    })
    .then(data=>{
        displayProfile(data)
    }).catch(err=>{
        console.error('There was a problem with the fetch operation',err)
    })
}

function displayProfile(profileData){
    const profileElement=document.getElementById('profile')
    profileElement.innerHTML=`<h2>${profileData.login}</h2>
    <img src="${profileData.avatar_url}" style="width:100px;height:100px; border-radius:50%"/>`
}