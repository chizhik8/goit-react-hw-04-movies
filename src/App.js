import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import HomePage from './movies/HomePage'
import MovieDetailsPage from './movies/MovieDetailsPage';
import MoviesPage from './movies/MoviesPage'
import Cast from './movies/Cast'
import Reviews from './movies/Reviews'
import Navigation from './components/images/Navigation';
import routes from './routes';



const App = () => (
    <>
        <Navigation />
        <hr/>
        <Switch>
            <Route path={ routes.home } exact component={HomePage} />
            <Route path={ routes.movies } exact component={MoviesPage} />
            <Route path={ routes.movieDetails } component={MovieDetailsPage} />
            <Route path={ routes.cast } component={Cast} />
            <Route path={ routes.reviews } component={Reviews} />
            <Redirect to="/" /> 
        </Switch>
    </>
        
);

export default App;

