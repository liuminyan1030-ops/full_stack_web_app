/*
 * Name: 
 * Date: November 18, 2026
 * Description: Placeholder form to add or edit a movie.
 * Input: title, actors, release year (to be wired later)
 * Processing: validate and save to Supabase (TODO)
 * Output: add/edit form UI
 */

export default function MovieForm() {
  return (
    <form className="border border-dashed border-gray-400 rounded-md p-4 space-y-3">
      <h2 className="font-semibold">Add / Edit movie (empty)</h2>
      <input className="block w-full border p-2" placeholder="Title" disabled />
      <input className="block w-full border p-2" placeholder="List of actors" disabled />
      <input className="block w-full border p-2" placeholder="Release year" disabled />
      <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded" disabled>
        Save 
      </button>
    </form>
  );
}
