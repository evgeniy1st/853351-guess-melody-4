import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorsCount, gameTime} = props;

  return (
    <WelcomeScreen
      errorsCount={errorsCount}
      timeCount={gameTime}
    />
  );
};

export default App;
