const apiKey = 'fec2152da2546dd55003045d638a12bf';
const baseURL = 'https://api.themoviedb.org/3/';

const fetchMoviesTrend = () => {
    return fetch(`${baseURL}trending/movie/day?api_key=${apiKey}`)
        .then(response => response.json())
        .then(trends => trends.results)
 }

const fetchMoviesData = (id) => {
    return fetch(`${baseURL}movie/${id}?api_key=${apiKey}`)       
        .then(response => response.json())
}

const fetchMoviesImg = (id) => {
    return fetch(`${baseURL}movie/${id}/images?api_key=${apiKey}`)       
        .then(response => response.json())
}
 


export default { fetchMoviesTrend, fetchMoviesData, fetchMoviesImg };





// пример АРІ запроса
//  https://api.themoviedb.org/3/movie/550?api_key=fec2152da2546dd55003045d638a12bf

// пример запроса  список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://api.themoviedb.org/3/trending/movie/day?api_key=fec2152da2546dd55003045d638a12bf

// запрос полной информации о фильме для страницы кинофильма.
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// images
// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US