import '../css/Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🗓️ School</div>
      <div className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Schedule">Schedule</Link></li>
        <li><Link to="/About">About</Link></li>
      </div>
    </nav>
  );
};

