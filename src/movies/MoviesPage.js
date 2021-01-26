import React from 'react'

export default function MoviesPage() {
    return (
        <div>
            <form className="SearchForm">
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>
                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                />
            </form>
        </div>
    )
}


// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
