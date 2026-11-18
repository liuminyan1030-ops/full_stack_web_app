/*
 * Name: MYI Studio
 * Date: November 17, 2026
 * Description: Static navbar for the IMR movie portal.
 * Input: none
 * Processing: render company navigation
 * Output: header on every page
 */

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <p className="font-bold">IMR — Internet Movies Rental</p>
        <nav>
          <span>Movies</span>
        </nav>
      </div>
    </header>
  );
}
