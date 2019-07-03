import React from 'react';
import renderer from 'react-test-renderer';
import Root from '../Root';

describe('<Root />', () => {
  const tree = renderer.create(<Root />).toJSON();
  it('has 2 children', () => {
    expect(tree.children.length).toBe(2);
  });
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});