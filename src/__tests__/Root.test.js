import React from 'react';
import renderer from 'react-test-renderer';
import Root from '../Root';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

describe('<Root />', () => {
  const initialState = {
    modal: {
      open: false
    }
  }; 
  const mockStore = configureStore();
  let store = mockStore(initialState);
  let wrapper = shallow(<Root store={store} />);
  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});