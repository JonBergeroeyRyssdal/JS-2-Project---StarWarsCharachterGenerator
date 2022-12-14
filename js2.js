const btn = document.querySelector('button');
const name = document.getElementById('name');
const planet = document.getElementById('height');
const movies = document.getElementById('mass');

btn.addEventListener('click', function (event) {
    character = Math.floor(Math.random() * 83) + 1
    url = `https://swapi.dev/api/people/${character}/`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            name.innerText = data['name'];
            height.innerText = data['height'];
            mass.innerText = data['mass'];
        })

})