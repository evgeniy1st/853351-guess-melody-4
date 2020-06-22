import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app.jsx";

const init = () => {
  const welcomeButtonHandler = () => { };
  const Setting = {
    ERRORS_COUNT: 3,
    TIME_COUNT: 5
  };

  ReactDOM.render(
      <App
        errorsCount={Setting.ERRORS_COUNT}
        gameTime={Setting.TIME_COUNT}
        onWelcomeButtonClick={welcomeButtonHandler}
      />,
      document.querySelector(`#root`)
  );
};

init();
