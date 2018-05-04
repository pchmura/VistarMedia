import {expect} from 'chai';
import * as actions from '../../redux/actions/actions'

describe('actions', () => {
    it('should create an action to guessNumber', () => {
      const number = 4;
      const expectedAction = {
            type: 'GUESS_NUMBER',
            value: number
      }
      expect(actions.guessNumber(number)).to.be.deep.equal(expectedAction)
    })

    it('should create an action to start a game', () => {
        const low = 1;
        const high = 10;
        const expectedAction = {
            type: 'START_NEW_GAME',
            lowerLimit: low,
            upperLimit: high
        }
        expect(actions.startNewGame(low, high)).to.be.deep.equal(expectedAction)
      })
  })
