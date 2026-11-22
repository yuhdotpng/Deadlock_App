import './Header.css'
import { Link } from 'react-router-dom';

function Header() {


  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="app-title">DeadLock Information App</Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Characters</Link>
          <Link to="/items" className="nav-link">Items</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;