import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure  } from 'enzyme';
import SessionComponent from './session.component';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SessionComponent', () => {
    it('should render correctly', () => {
        const output = shallow(<SessionComponent />);
        expect(output.contains(
            <div className="panel-heading">
                Sessions
            </div>

        )).to.equal(true);
    });
});