/*
 * Name: 
 * Date: November 18, 2026
 * Description: Renders a list of movies using MovieCard.
 * Input: an array of movies
 * Processing: map each movie to a card
 * Output: the movies list on the page
 */

import MovieCard, { type Movie } from "./MovieCard";

type MovieListProps = {
  movies: Movie[];
};

export default function MovieList({ movies }: MovieListProps) {
  if (movies.length === 0) {
    return <p>No movies yet.</p>;
  }

  return (
    <section className="grid gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
