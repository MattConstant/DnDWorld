import React, { useRef } from 'react';

import classes from '../monster/AddMonster.module.css';

function AddPlayer(props) {
  const idRef = useRef('');
  const nameRef = useRef('');
  const armorClassRef = useRef('');
  const initiativeRef = useRef('');
  const perceptionRef = useRef('');
  const clRef = useRef('');
  const raceRef = useRef('');
  const backgroundRef = useRef('');
  const alignRef = useRef('');
  const speedRef = useRef('');
  const profRef = useRef('');
  const strRef = useRef('');
  const conRef = useRef('');
  const intlRef = useRef('');
  const wisRef = useRef('');
  const chaRef = useRef('');
  const dexRef = useRef('');
  const skillsRef = useRef('');
  const notesRef = useRef('');




  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const player = {
        id: Math.random().toString(),
        name: nameRef.current.value.toString(),
        armorClass: armorClassRef.current.value,
        initiative: initiativeRef.current.value,
        perception: perceptionRef.current.value,
        cl: clRef.current.value,
        raceRef: raceRef.current.value,
        backgroundRef: backgroundRef.current.value,
        alignRef: alignRef.current.value,
        speedRef: speedRef.current.value,
        profRef: profRef.current.value,
        strRef: strRef.current.value,
        conRef: conRef.current.value,
        intlRef: intlRef.current.value,
        wisRef: wisRef.current.value,
        chaRef: chaRef.current.value,
        dexRef: dexRef.current.value,
        skillsRef: skillsRef.current.value,
        notesRef: notesRef.current.value,

    };

    props.onAddPlayer(player);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Name</label>
        <input type='hidden' id='id' ref={idRef} />
        <input type='text' id='name' ref={nameRef} />
        <input type='number' id='armorClass' ref={armorClassRef} />
        <input type='number' id='initiative' ref={initiativeRef} />
        <input type='number' id='perception' ref={perceptionRef} />
        <input type='text' id='cl' ref={clRef} />
        <input type='text' id='race' ref={raceRef} />
        <input type='text' id='background' ref={backgroundRef} />
        <input type='text' id='align' ref={alignRef} />
        <input type='text' id='speed' ref={speedRef} />
        <input type='number' id='prof' ref={profRef} />
        <input type='number' id='str' ref={strRef} />
        <input type='number' id='con' ref={conRef} />
        <input type='number' id='intl' ref={intlRef} />
        <input type='number' id='wis' ref={wisRef} />
        <input type='number' id='cha' ref={chaRef} />
        <input type='number' id='dex' ref={dexRef} />
        <input type='text' id='skills' ref={skillsRef} />
        <input type='text' id='notes' ref={notesRef} />

      </div>
      <button>Add Player</button>
    </form>
  );
}

export default AddPlayer;