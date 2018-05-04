import {expect} from 'chai';
import GameplayReducer from '../../redux/reducers/GameplayReducer'


describe('gameplay reducer', () => {
    it('should return the initial state', () => {
        expect(GameplayReducer(undefined, {})).to.contain.all.keys({
            lowerLimit: 1,
            upperLimit: 10,
            currentGuess: null,
            lastGuess: 'none'
        })

        expect(GameplayReducer(undefined, {})).to.contain.keys('numberToGuess')
    })

    it('START_NEW_GAME should return an object with the updated state', () => {

        expect(GameplayReducer([], {type: 'START_NEW_GAME', lowerLimit: 10, upperLimit: 15})).to.contain.all.keys({
            lowerLimit: 10,
            upperLimit: 15,
        })
    })

    it('GUESS_NUMBER should update last guess, currentGuessIs, currentGuess', () => {
        //low
        expect(GameplayReducer({numberToGuess: 11}, {type: 'GUESS_NUMBER', value: 10})).to.contain.all.keys({
            lastGuess: 10,
            currentGuessIs: 'low',
            currentGuess: 10
        })
        //high
        expect(GameplayReducer({numberToGuess: 11}, {type: 'GUESS_NUMBER', value: 13})).to.contain.all.keys({
            lastGuess: 13,
            currentGuessIs: 'high',
            currentGuess: 13
        })
        //correct 
        expect(GameplayReducer({numberToGuess: 13}, {type: 'GUESS_NUMBER', value: 13})).to.contain.all.keys({
            lastGuess: 13,
            currentGuessIs: 'correct',
            currentGuess: 13
        })
    })
})