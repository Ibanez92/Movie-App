// Initial Values
const API_KEY = '0f46154c6e7f8134478e0cd0f9b48dc6';

const url = 'https://api.themoviedb.org/3/search/movie?api_key=0f46154c6e7f8134478e0cd0f9b48dc6';

// Selecting elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');

buttonElement.onclick = function(event) {
    event.preventDefault();
    const value = inputElement.value;

    const newUrl = url + '&query=' + value;
    
    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log('Data: ', data);
        })
        .catch((error) => {
            console.log('Error ', error);
        });
    console.log('Value ', value);
}