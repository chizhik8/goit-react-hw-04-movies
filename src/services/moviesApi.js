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

const fetchMoviesCast = (id) => {
    return fetch(`${baseURL}movie/${id}/credits?api_key=${apiKey}`)       
        .then(response => response.json())
        .then(casts => casts.cast)
}

const fetchMoviesRev = (id) => {
    return fetch(`${baseURL}movie/${id}/reviews?api_key=${apiKey}`)       
        .then(response => response.json())
        .then(rev => rev.results)
}

const fetchMoviesSearch = (query) => {
    return fetch(`${baseURL}search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`)       
        .then(response => response.json())
        .then(query => query.results)
}


export default { fetchMoviesTrend, fetchMoviesData, fetchMoviesCast, fetchMoviesRev, fetchMoviesSearch};





// пример АРІ запроса
//  https://api.themoviedb.org/3/movie/550?api_key=fec2152da2546dd55003045d638a12bf

// пример запроса  список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://api.themoviedb.org/3/trending/movie/day?api_key=fec2152da2546dd55003045d638a12bf

// запрос полной информации о фильме для страницы кинофильма.
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// images
// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US

// cast
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

// reviews
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

// search
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=cat&page=1&include_adult=false