import React, {Suspense, lazy} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage'
import routes from './routes';
import Header from './components/Header';



const App = () => (
    <>
        <Suspense fallback={ <h1>Loading....</h1>}>
            <Header/>
            <Switch>
                <Route path={ routes.home } exact component={HomePage} />
                <Route path={ routes.movies } exact component={MoviesPage} />
                <Route path={ routes.movieDetails } component={MovieDetailsPage} />
                <Redirect to="/" /> 
            </Switch>
        </Suspense>
    </>
        
);

export default App;


