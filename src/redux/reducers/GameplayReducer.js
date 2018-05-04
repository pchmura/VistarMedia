import { generateNumber } from '../../utils.js';

const initialState = {
    lowerLimit: 1,
    upperLimit: 10,
    currentGuess: null,
    lastGuess: 'none',
    numberToGuess: generateNumber()
}

const GameplayReducer = (state = initialState, action) => {
    switch (action.type) {

        // Start a new game, also sets new limits
        case 'START_NEW_GAME':
            return Object.assign({}, state, {
            lowerLimit: action.lowerLimit,
            upperLimit: action.upperLimit,
            numberToGuess: generateNumber(action.upperLimit, action.lowerLimit)
            })
        
        // evaluates the current guess to check if its higher/lower or correct
        case 'GUESS_NUMBER':
            let guess = parseInt(action.value, 10);
            let currentGuessIs;

            if (guess === state.numberToGuess) {
                currentGuessIs = "correct";
            }
            else if (guess < state.numberToGuess) {
                currentGuessIs = "low";
            }
            else if (guess > state.numberToGuess) {
                currentGuessIs = "high";
            }
            return Object.assign({}, state, {
                lastGuess: guess,
                currentGuessIs: currentGuessIs,
                currentGuess: guess
            })

        default:
        return state
    }
}
 
export default GameplayReducer