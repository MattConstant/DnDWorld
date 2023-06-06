import React, { useRef } from 'react';

import classes from './AddMonster.module.css';

function AddMonster(props) {
  const nameRef = useRef('');


  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const monster = {
      name: nameRef.current.value,
    
    };

    props.onAddMonster(monster);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Name</label>
        <input type='text' id='name' ref={nameRef} />
      </div>
      <button>Add Monster</button>
    </form>
  );
}

export default AddMonster;