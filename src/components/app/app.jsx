import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {errorsCount, gameTime} = props;

  return (
    <WelcomeScreen
      errorsCount={errorsCount}
      timeCount={gameTime}
    />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
};

export default App;
