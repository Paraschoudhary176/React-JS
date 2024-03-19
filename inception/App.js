{
  /* this simply makes h1 element */
  //   Props are the cildrens and the attributes which we pass on
}
const heading = React.createElement(
  "h1",
  {},
  "Learning Docs from React itself"
);

const parent = React.createElement(
  "div",
  { id: "parent", xyz: "abc" },
  React.createElement("h1", { id: "child" }, "here's H1!"),
  "Hello from nested refs"
);

{
  /* this goes to the dom and picks up the root from dom */
}
const root = ReactDOM.createRoot(document.getElementById("root"));

// this will helps to render the emelents
root.render(parent);
