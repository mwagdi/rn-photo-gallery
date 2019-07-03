import React from 'react';
import renderer from 'react-test-renderer';
import Photo from '../../components/Photo';

describe('<Photo />', () => {
    const photo = {
        id: 1,
        src: "http://example.com/example.jpg",
        title: "Image Title"
    }
    const tree = renderer.create(<Photo photo={photo} />).toJSON();
    it('has 2 children', () => {
        expect(tree.children.length).toBe(2);
    });
    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});