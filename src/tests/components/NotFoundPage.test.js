import React from 'react';
import { shallow } from 'enzyme';
import NoFoundPage from '../../components/NoFoundPage';

test('Should render NoFoundPage correctly', ()=> {
    const wapper = shallow(<NoFoundPage />);
    expect(wapper).toMatchSnapshot();
});