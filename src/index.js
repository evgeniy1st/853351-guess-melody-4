import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions";

const init = () => {
  const welcomeButtonHandler = () => { };
  const Setting = {
    ERRORS_COUNT: 3
  };

  ReactDOM.render(
      <App
        errorsCount={Setting.ERRORS_COUNT}
        onWelcomeButtonClick={welcomeButtonHandler}
        questions={questions}
      />,
      document.querySelector(`#root`)
  );
};

init();
