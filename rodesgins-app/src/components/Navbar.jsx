import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="text-xl font-bold">MySite</div>
      <div className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
        <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
