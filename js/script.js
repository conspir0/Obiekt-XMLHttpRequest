'use strict';

var url = 'http://api.icndb.com/jokes/random';

// button
var button = document.getElementById('get-joke');
button.addEventListener('click', function() {
    getJoke();
});

// selector p - place to show random joke
var paragraph = document.getElementById('joke');

// implementation getJoke()
function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function() {
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
}

// initial joke
getJoke();