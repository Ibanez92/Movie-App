// Initial Values
const API_KEY = '0f46154c6e7f8134478e0cd0f9b48dc6';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

const url = 'https://api.themoviedb.org/3/search/movie?api_key=0f46154c6e7f8134478e0cd0f9b48dc6';

// Selecting elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movies-searchable');

function movieSection(movies) {
     return movies.map((movie) => {
        if (movie.poster_path) {
            return `<img 
                src=${IMAGE_URL + movie.poster_path} 
                data-movie-id=${movie.id}
            />`;
        }
    })
}
  

function createMovieContainer(movies) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');

    const movieTemplate = `
        <section class="section">
          ${movieSection(movies)}
        </section>
      <div class="content">
          <p id="content-close">X</p>
      </div>
    `;

    movieElement.innerHTML = movieTemplate;
    return movieElement;
}


function renderSearchMovies(data) {
    // data.results []
    movieSearchable.innerHTML='';
    const movies = data.results;
    const movieBlock = createMovieContainer(movies);
    movieSearchable.appendChild(movieBlock);
    console.log('Data: ', data);
}

buttonElement.onclick = function(event) {
    event.preventDefault();
    const value = inputElement.value;

    const newUrl = url + '&query=' + value;
    
    fetch(newUrl)
        .then((res) => res.json())
        .then(renderSearchMovies)
        .catch((error) => {
            console.log('Error: ', error);
        });

        inputElement.value = '';
    console.log('Value ', value);
}