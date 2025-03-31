const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "H1 tag"),
    React.createElement("h2", { id: "heading2" }, "H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", { id: "heading3" }, "H3 tag"),
    React.createElement("h4", { id: "heading4" }, "H4 tag"),
  ]),
]);

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
