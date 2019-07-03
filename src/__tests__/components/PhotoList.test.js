import React from 'react';
import renderer from 'react-test-renderer';
import PhotoList from './../../components/PhotoList';

describe('<PhotoList />', () => {
    const photoIds = [1,2,3];
    const photosById = {
        1: {
            id: 1,
            title: "Image 1",
            src: "https://cdn-images-1.medium.com/max/1500/1*dIocy2HvI_BIpziOypf8ig.jpeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et augue ullamcorper, congue augue in, consectetur libero. Vestibulum vel ex.",
            comments: []
        },
        2: {
            id: 2,
            title: "Image 2",
            src: "https://cdn-images-1.medium.com/max/1500/1*dIocy2HvI_BIpziOypf8ig.jpeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et augue ullamcorper, congue augue in, consectetur libero. Vestibulum vel ex.",
            comments: []
        },
        3: {
            id: 3,
            title: "Image 3",
            src: "https://cdn-images-1.medium.com/max/1500/1*dIocy2HvI_BIpziOypf8ig.jpeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et augue ullamcorper, congue augue in, consectetur libero. Vestibulum vel ex.",
            comments: []
        }
    }
    const tree = renderer.create(<PhotoList photoIds={photoIds} photosById={photosById} />).toJSON();
    it('has 3 children', () => {
        expect(tree.children.length).toBe(3);
    });
    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});