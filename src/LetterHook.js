//import from reacct
import {  useState } from 'react';
//defining the custom hook
export default function useLetters(initial) {
  //setting up the hook state`
  const [state, setState] = useState(initial ? initial : []);
  //the function to update the hooked state
  const setValue = (action) => {
    console.log(action.type + 'ing')
    //runs the reducer
    const newState = letterReducer(state, action);
    //sets the new state based off the reduction
    setState(newState);
  }
  //returns the 2 values
  return [state, setValue];

}
//defines action based on action type
function letterReducer(state, action) {
  //splits into case dbased on type
  switch(action.type) {
    //appends new value to array
    case 'add':
      return [
        ...state,
        action.value
      ].sort()
    //removes value from array
    case 'remove':
      let test = false,
          //custom function to filter out exactly 1 of matched value
          newState = state.filter( val => {
              const valEquals = val !== action.value;
              const finalResult = valEquals || test;
              if(!valEquals) {
                test = true;
              }
              return finalResult;
            });
      return newState;
    //something went horrible wrong just proceed
    default:
      return state;
  }
}
