import * as React from "react";
import * as ReactDOM from "react-dom";
window.React = React;
import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="Typescript" framework="React" />,
    document.getElementById("example"),
);