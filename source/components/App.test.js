import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

test('App renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('#App-Component');
  expect(appComponent.length).toBe(1);
});
