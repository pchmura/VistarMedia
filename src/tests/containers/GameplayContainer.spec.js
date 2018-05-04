import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'
configure({ adapter: new Adapter() });

import GameplayContainerConnected, {GameplayContainer}  from '../../containers/GameplayContainer';
import Feedback from '../../components/feedback';
import GuessInput from '../../components/guessInput';
import { generateNumber } from '../../utils.js';

describe('GameplayContainer', () => {
    
    const initialState = {lowerLimit: 1,
        upperLimit: 10,
        currentGuess: null,
        lastGuess: 'none',
        numberToGuess: generateNumber()};
    const mockStore = configureStore();
    const store = mockStore(initialState)

	it('should display the correct message based on the props provided', () => {

        const wrapper = shallow(<GameplayContainer gameParams={initialState}/>)
        // make sure it renders the <p> tag.
        expect(wrapper.exists(<p>Guess the number between 1 and 10</p>)).to.be.equal(true);
        // ensure props are getting set
        expect(wrapper.instance().props.gameParams).to.deep.equal(initialState);

        // //test other prop values
        wrapper.setProps({ lowerLimit: 15, upperLimit: 40 });
        expect(wrapper.exists(<p>Guess the number between 15 and 40</p>)).to.be.equal(true);
    })
    
    it('should render Feedback and GuessInput components', () => {
        const wrapper = shallow(<GameplayContainer gameParams={initialState}/>)
        expect(wrapper.find(Feedback)).to.have.length(1)
        //renders Guess
        expect(wrapper.find(GuessInput)).to.have.length(1)
    })

    it('should get props from the store', () => {
        const wrapper = shallow(<GameplayContainerConnected store={store}/>)
        expect(wrapper.exists(<p>Guess the number between 1 and 10</p>)).to.be.equal(true);
    })

})