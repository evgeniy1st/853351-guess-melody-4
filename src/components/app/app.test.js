import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app.jsx";

it(`App render`, () => {
  const tree = renderer
    .create(<App
      errorsCount={3}
      gameTime={5}
      onWelcomeButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
