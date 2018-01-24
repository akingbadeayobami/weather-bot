import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure  } from 'enzyme';
import BotMessage from './bot.message.component';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';

configure({ adapter: new Adapter() });

describe('BotMessage', () => {
    it('should render correctly', () => {

        const message = {
            message : 'Hello',
            created_at : new Date 
        };

        const output = shallow(<BotMessage message={message} />);
        expect(output.contains(
               <p>Hello</p>
        )).to.equal(true);
    });
});