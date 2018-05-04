import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import {GuessInput} from '../../components/guessInput';

describe('GuessInput component', () => {
	it('should display the correct message based on the props provided', () => {

        const wrapper = shallow(<GuessInput />)
        // make sure it renders the <form> tag.
        expect(wrapper.exists(<form></form>)).to.be.equal(true);
    })

})