import { Link } from 'react-router-dom';
import '../styles/components.css'

export default function SideBar() {
	return (
		<nav className="navbar">
      <div className="sidebar">
        <div className="sidebar-content">
          <ul className="lists">
            <li className="list">
              <Link to="/" className="nav-link">
                <span className="link">Home</span>
              </Link>
            </li>
            <li className="list">
              <Link to="/about" className="nav-link">
                <span className="link">About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  }