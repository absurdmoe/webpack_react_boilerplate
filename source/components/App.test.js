import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import App from './App';

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByAttribute = (wrapper, val) => {
  return wrapper.find('#App-Component');
};

Enzyme.configure({ adapter: new EnzymeAdaptor() });

test('App renders without error', () => {
  const wrapper = setup();
  const appComponent = findByAttribute(wrapper, 'App');
  expect(appComponent.length).toBe(1);
});
