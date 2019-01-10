import React  from 'react';
import { PropTypes } from 'prop-types';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}