import React from 'react';
import { Link } from 'react-router-dom';
import "./academics.css";

function Academics() {
  return (
    <div>
      <header>
            <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tennis">Tennis</Link></li>
                <li><Link to="/academics">Academics</Link></li>
                <li><Link to="/horse-riding">Horse Riding</Link></li>
            </ul>
            </nav>
        </header>
    </div>
  );
}

export default Academics;
