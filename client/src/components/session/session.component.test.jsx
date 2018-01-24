import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure  } from 'enzyme';
import {Session} from './session.component';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Session', () => {
    it('should render correctly', () => {
        const output = shallow(<Session />);
        expect(output.contains(
            <div className="panel-heading">
                Sessions
            </div>

        )).to.equal(true);
    });
});