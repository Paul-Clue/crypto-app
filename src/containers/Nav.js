import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../actions/index';
import Filter from './Filter';
import '../assets/stylesheets/Nav.css';

function Nav() {
  const filtered = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  function handleFilterChange(filt) {
    dispatch(changeFilter(filt));
  }
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
            <Filter filt={filtered} filter={handleFilterChange} />
            &nbsp;
            <span className="filtTag">Filter By Market Cap</span>
            &nbsp;
            <span className="filtTag2"> *Caps less than value chosen will appear</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
