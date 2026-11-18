/*
 * Name: 
 * Date: November 18, 2026
 * Description: IMR movies list page. Dummy data only; later load from Supabase.
 * Input: none yet (movies will come from the database)
 * Processing: show the list and an empty add/edit form
 * Output: movies portal home page
 */

import MovieForm from "@/components/MovieForm";
import MovieList from "@/components/MovieList";
import { type Movie } from "@/components/MovieCard";

const dummyMovies: Movie[] = [
  {
    id: 1,
    title: "Example Movie",
    actors: "Actor A, Actor B",
    releaseYear: 2024,
  },
];

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Movie Database</h1>
      <MovieForm />
      <MovieList movies={dummyMovies} />
    </main>
  );
}
