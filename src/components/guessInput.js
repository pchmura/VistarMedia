import React from 'react'
import { connect } from 'react-redux'
import { guessNumber } from '../redux/actions/actions'

export const GuessInput = ({ dispatch }) => {
    let guessInput;
    
    const handleSubmit = e => {
        e.preventDefault();

        let guess = guessInput.value;

        if (isNaN(guess) || guess.trim() === '') {
          window.alert('only numbers are allowed');
          return;
        }

        dispatch(guessNumber(guess));

        //reset the input
        guessInput.value = ''; 
        guessInput.focus();

    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                <input
                    type="number"
                    placeholder="guess"
                    ref={node => guessInput = node}
                    />
                <button type="submit">Make guess</button>
                </div>
            </form>
        </div>
  )
}

export default connect()(GuessInput);