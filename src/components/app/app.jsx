import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {errorsCount, gameTime, onWelcomeButtonClick} = props;

  return (
    <WelcomeScreen
      errorsCount={errorsCount}
      timeCount={gameTime}
      onWelcomeButtonClick={onWelcomeButtonClick}
    />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
};

export default App;
