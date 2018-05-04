import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'
configure({ adapter: new Adapter() });

import FeedbackConnected, {Feedback}  from '../../components/feedback';

describe('Feedback component', () => {
    
    const initialState = {gameParams:{currentGuessIs:'high'}};
    const mockStore = configureStore();
    const store = mockStore(initialState)

	it('should display the correct message based on the props provided', () => {

        const wrapper = shallow(<Feedback currentGuessIs={'high'}/>)
        // make sure it renders the <p> tag.
        expect(wrapper.exists(<p>Nope. Lower</p>)).to.be.equal(true);
        // ensure props are getting set
        expect(wrapper.instance().props.currentGuessIs).to.be.equal("high");
        // check if it renders the proper response for a guess that's too high
        expect(wrapper.text()).to.equal("Nope. Lower");

        //test other prop values
        wrapper.setProps({ currentGuessIs: "low" });
        expect(wrapper.text()).to.equal("Nope. Higher");
        wrapper.setProps({ currentGuessIs: "You got it!" });
        expect(wrapper.text()).to.equal("You got it!");



    })
    
    it('should get props from the store ', () => {
        const wrapper = shallow(<FeedbackConnected store={store}/>)
        expect(wrapper.exists(<p>Nope. Lower</p>)).to.be.equal(true);
    })

})