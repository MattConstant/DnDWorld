import React, { useRef } from 'react';

import classes from './AddMonster.module.css';

function AddMonster(props) {
  const idRef = useRef('');
  const nameRef = useRef('');
  const urlRef = useRef('');
  const acRef = useRef('');
  const hpRef = useRef('');
  const crRef = useRef('');
  const strRef = useRef('');
  const dexRef = useRef('');
  const conRef = useRef('');
  const wisRef = useRef('');
  const chaRef = useRef('');


  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const monster = {
      id: Math.random().toString(),
      name: nameRef.current.value.toString(),
      url: urlRef.current.value.toString(),
      ac: acRef.current.value,
      hp: hpRef.current.value,
      cr: crRef.current.value,
      str: strRef.current.value,
      dex: dexRef.current.value,
      con: conRef.current.value,
      wis: wisRef.current.value,
      cha: chaRef.current.value,
   
    };

    props.onAddMonster(monster);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Name</label>
        <input type='hidden' id='id' ref={idRef} />
        <input type='text' id='name' ref={nameRef} />
        <input type='text' id='url' ref={urlRef} />
        <input type='number' id='ac' ref={acRef} />
        <input type='number' id='hp' ref={hpRef} />
        <input type='number' id='cr' ref={crRef} />
        <input type='number' id='str' ref={strRef} />
        <input type='number' id='dex' ref={dexRef} />
        <input type='number' id='con' ref={conRef} />
        <input type='number' id='wis' ref={wisRef} />
        <input type='number' id='cha' ref={chaRef} />

      </div>
      <button>Add Monster</button>
    </form>
  );
}

export default AddMonster;