/*
 * Name: 
 * Date: November 18, 2026
 * Description: Footer with IMR company and contact information.
 * Input: none
 * Processing: render company details
 * Output: footer on every page
 */

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="max-w-5xl mx-auto text-center text-sm space-y-1">
        <p>Internet Movies Rental Company (IMR)</p>
        <p>Email: contact@imr.example | Phone: 403-000-0000</p>
        <p>&copy; {new Date().getFullYear()} IMR. All rights reserved.</p>
      </div>
    </footer>
  );
}
