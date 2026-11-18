/*
 * Name: 
 * Date: November 18, 2026
 * Description: Displays one movie: title, actors, and release year.
 * Input: one movie object
 * Processing: render movie fields
 * Output: a movie card
 */

export type Movie = {
  id: number;
  title: string;
  actors: string;
  releaseYear: number;
};

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="border border-gray-300 rounded-md p-4 bg-white">
      <h2 className="font-semibold">{movie.title}</h2>
      <p>Actors: {movie.actors}</p>
      <p>Release year: {movie.releaseYear}</p>
      {/* TODO: Edit and Delete buttons */}
    </article>
  );
}
