import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Filter from './Filter';
import '../assets/stylesheets/Nav.css';

function Nav() {
  const filtered = useSelector((state) => state.filter);

  return (
    <div>
      <nav className="navbar navbar-light bg-info">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <h1 className="NavHead">
              <span className="dollar">
                $$
              </span>
              CRYPTO
              <span className="dollar">
                $$
              </span>
            </h1>
          </span>
          <div>
            <Filter filt={filtered} />
            &nbsp;
            <span className="filtTag">Filter By Market Cap</span>
            &nbsp;
            <span className="filtTag2"> *Caps less than value chosen will appear</span>
            <Link className="Link home" to="/">
              Home
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
