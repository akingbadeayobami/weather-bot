import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure  } from 'enzyme';
import MyMessage from './my.message.component';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';

configure({ adapter: new Adapter() });

describe('MyMessage', () => {
    it('should render correctly', () => {

        const message = {
            message : 'Hello',
            created_at : new Date 
        };

        const output = shallow(<MyMessage message={message} />);
        expect(output.contains(
               <p>Hello</p>
        )).to.equal(true);
    });
});