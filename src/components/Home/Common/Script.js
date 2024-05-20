import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/page1">Page 1</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/page2">Page 2</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;