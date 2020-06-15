import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app.jsx";

const init = () => {
  const Setting = {
    ERRORS_COUNT: 3,
    TIME_COUNT: 5
  };

  ReactDOM.render(
      <App
        errorsCount={Setting.ERRORS_COUNT}
        gameTime={Setting.TIME_COUNT}
      />,
      document.querySelector(`#root`)
  );
};

init();
