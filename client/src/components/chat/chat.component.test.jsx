import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Chat from './chat.component';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Chat', () => {
    it('should render correctly', () => {
        const output = shallow(<Chat />);
        expect(output.contains(
            <div className="panel-heading">
                Chat
             </div>

        )).to.equal(true);
    });
});