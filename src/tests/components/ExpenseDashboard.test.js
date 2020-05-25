import React from 'react';
import { shallow } from 'enzyme';
import ExpanseDashboardPage from '../../components/ExpanseDashboardPage';

test('Should render ExpanseDashboardPage correctly', ()=> {
    const wapper = shallow(<ExpanseDashboardPage />);
    expect(wapper).toMatchSnapshot();
});