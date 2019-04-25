import React, { useEffect } from 'react';

import useLetters from './LetterHook.js';

function App() {

  const [letterPool, setLetterPool] = useLetters([
    'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a',
    'b', 'b',
    'c', 'c',
    'd', 'd', 'd', 'd',
    'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'f', 'f',
    'g', 'g', 'g',
    'h', 'h',
    'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i',
    'j',
    'k',
    'l', 'l', 'l', 'l',
    'm', 'm',
    'n', 'n', 'n', 'n', 'n', 'n',
    'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',
    'p', 'p',
    'q',
    'r', 'r', 'r', 'r', 'r', 'r',
    's', 's', 's', 's',
    't', 't', 't', 't', 't', 't',
    'u', 'u', 'u', 'u',
    'v', 'v',
    'w', 'w',
    'x',
    'y', 'y',
    'z',
  ]);

  const [lettersOne, setLettersOne] = useLetters();
  const [lettersTwo, setLettersTwo] = useLetters();
  //ensures that each player has a random set of 7 characters to start game
  useEffect(() => {
    for(
      let i = lettersOne.length, j = lettersTwo.length;
      i < 7 || j < 7;
      i++, j++
    ) {
      if(i < 7) {transferLetterOne()}
      if(j < 7) {transferLetterTwo()}
    }
  })
  //transfers letters to the list for player one
  function transferLetterOne() {
    const index = Math.floor(Math.random() * letterPool.length);
    const letter = letterPool[index];
    setLettersOne({
      type: 'add',
      value: letter
    })
    setLetterPool({
      type: 'remove',
      value: letter
    })
  }
  //transfers letters to the list for player two
  function transferLetterTwo() {
    const index = Math.floor(Math.random() * letterPool.length);
    const letter = letterPool[index];
    setLettersTwo({
      type: 'add',
      value: letter
    })
    setLetterPool({
      type: 'remove',
      value: letter
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {JSON.stringify(letterPool)}
        </p>
        <p>
          {JSON.stringify(lettersOne)}
        </p>
        <button
          onClick={() => {
            setLettersOne({
              type: 'remove',
              value: lettersOne[0]
            })
          }}
        >
          Remove 1
        </button>
        <p>
          {JSON.stringify(lettersTwo)}
        </p>
        <button
          onClick={() => {
            setLettersTwo({
              type: 'remove',
              value: lettersTwo[0]
            })
          }}
        >
          Remove 2
        </button>
      </header>
    </div>
  );
}

export default App;
