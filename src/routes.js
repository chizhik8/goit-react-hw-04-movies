import { lazy } from 'react';

const AsyncComp = lazy();

export default {
        home: "/",
        movies: "/pages",
        movieDetails: "/pages/:movieId",
        cast: "/pages/:movieId/cast",
        reviews: "/pages/:movieId/reviews",
}