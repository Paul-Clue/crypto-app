import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import '../assets/stylesheets/App.css';
import { changeFilter } from '../actions/index';

const Filter = (props) => {
  const dispatch = useDispatch();
  const category = useRef();
  const { filt } = props;

  function handleFilterChange(filt) {
    dispatch(changeFilter(filt));
  }

  function handleForm(event) { event.preventDefault(); }

  const cat = ['900000000000', '100000000000', '50000000000'];
  return (
    <select name="category" id="category" className="categories" onSubmit={handleForm} value={filt} ref={category} onChange={() => handleFilterChange(category.current.value)}>
      <option value="All" key="All">All</option>
      {cat.map((catt) => <option value={catt} key={catt}>{catt}</option>)}
    </select>
  );
};

Filter.propTypes = { filt: PropTypes.instanceOf(Function).isRequired };

export default Filter;
