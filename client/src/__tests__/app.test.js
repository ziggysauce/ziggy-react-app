import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App';

describe('Component testing', () => {
  test('App component renders with h1 text and Credit component', () => {
    const component = renderer.create(<App></App>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

