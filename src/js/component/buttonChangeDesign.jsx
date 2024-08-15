import React from 'react';

const ButtonChangeDesign = ({showNotToDoList, toggleDesigns }) => {
  return (
    <button type="button" className="btn btn-success btn-lg m-5" id='buttonChangeDesign' onClick={toggleDesigns}>
      {showNotToDoList ? '⇦ To Do List' : 'Not To Do List ⇨'}
    </button>
  );
};

export default ButtonChangeDesign;
