import * as React from "react";
import * as ReactDOM from "react-dom";
import "./assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { App } from "./components/App";

const importAll: any = (r: any) => {
  return r.keys().map(r);
};

importAll(require.context("./", true, /\.(png|jpe?g|svg|eot|ttf|woff|woff2)$/));

ReactDOM.render(<App />, document.getElementById("root"));
