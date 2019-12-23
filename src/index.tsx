import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import store from "store/store";
import history from "store/history";
import Home from "components/home/home";
import "style/index.css";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="router-container">
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
