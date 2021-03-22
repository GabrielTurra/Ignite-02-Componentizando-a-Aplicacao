import { MovieCard } from './MovieCard';
import { MovieProps } from '../App';

interface contentPropsTypes{
  movies: MovieProps[];
}

export function Content({movies}: contentPropsTypes) {
  return (
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  )
}