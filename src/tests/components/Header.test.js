import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

//import ReactShallowRenderer from 'react-test-renderer/shallow';

test('Should render Header correctly', ()=> {
    const wapper = shallow(<Header />);
    expect(wapper).toMatchSnapshot();

    //expect(wapper.find('h1').text()).toBe('Expensify');
    //const renderer = new ReactShallowRenderer();
    //renderer.render(<Header />);
    //expect(renderer.getRenderOutput()).toMatchSnapshot();
});