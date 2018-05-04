import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import SetLimits from '../../components/setLimits';
import {SettingsContainer}  from '../../containers/SettingsContainer';

describe('SettingsContainer', () => {

	it('should display the correct message based on the props provided', () => {

        const wrapper = shallow(<SettingsContainer />)
        // make sure it renders the <p> tag.
        expect(wrapper.exists(<p><strong>Game Config</strong></p>)).to.be.equal(true);
        // ensure SetLimit is getting rendered
        expect(wrapper.find(SetLimits)).to.have.length(1)
    })
    
})