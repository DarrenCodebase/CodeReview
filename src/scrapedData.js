const anchorDisplay = document.querySelector('#anchor');

fetch('/displayResults')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(text => {
            const paraItem = `<div><p>` + text.passage + `</p></div>`;
            anchorDisplay.insertAdjacentHTML("beforeend", paraItem);
        })
    })
    .catch(err => console.log(err));
