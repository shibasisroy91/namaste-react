import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child" }, [
    React.createElement("h1", { id: "heading", key: "h1" }, "H1 tag"),
    React.createElement("h2", { id: "heading2", key: "h2" }, "H2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h3", { id: "heading3", key: "h3" }, "H3 tag"),
    React.createElement("h4", { id: "heading4", key: "h4" }, "H4 tag"),
  ]),
]);

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
