export const guessNumber = number => ({
    type: 'GUESS_NUMBER',
    value: number 
  })
  
  export const startNewGame = (low, high) => ({
    type: 'START_NEW_GAME',
    lowerLimit: low,
    upperLimit: high
  })