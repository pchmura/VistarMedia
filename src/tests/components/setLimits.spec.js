    import React from 'react';
    import {expect} from 'chai';
    import {shallow, mount} from 'enzyme';
    import { configure } from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';
    import configureStore from 'redux-mock-store'
    import sinon from 'sinon';
configure({ adapter: new Adapter() });

import SetLimitsConnected, {SetLimits}  from '../../components/setLimits';
import { startNewGame } from '../../redux/actions/actions';

describe('SetLimits component', () => {
    
    const initialState = {gameParams:{lowerLimit: 1, upperLimit: 10}};
    const mockStore = configureStore();
    const store = mockStore(initialState)

	it('should display the correct message based on the props provided', () => {

        const wrapper = shallow(<SetLimits gameParams={{lowerLimit: 1, upperLimit: 10}} />)
        // make sure it renders the <form> tag.
        expect(wrapper.exists(<form></form>)).to.be.equal(true);
    })

})