import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import HomePage from './movies/HomePage'
import MovieDetailsPage from './movies/MovieDetailsPage';
import MoviesPage from './movies/MoviesPage'
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
            <Redirect to="/" /> 
        </Switch>
    </>
        
);

export default App;

