import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// Import some react tools
import ReactDOM from "react-dom/client";
// Import first component
// Target the rood div
const rootDiv = document.getElementById("root");
// Transform the root div into react node
const reactRootNode = ReactDOM.createRoot(rootDiv);
// Inject our App component into react node

//STYLE
const BGStyle = {
  color: "white",
  backgroundColor: "skyblue",
};
//END STYLE
function MainHeaderComponent() {
  return (
    <div>
      <h2 className="text-primary">React Course</h2>
    </div>
  );
}

function SubHeaderComponent() {
  return (
    <div>
      <h3>Practice React</h3>
    </div>
  );
}

function FooterComponent() {
  return (
    <div>
      <h2>Happy Coding!</h2>
    </div>
  );
}
function MyFirstComponent() {
  return (
    <div style={BGStyle}>
      <p>This is a paragraf</p>
      <ul>
        <li>Call Bruno</li>
        <li>Do Einstellen</li>
      </ul>
    </div>
  );
}

function NestedHeaders() {
  return (
    <div>
      <MainHeaderComponent />
      <SubHeaderComponent />
    </div>
  );
}
reactRootNode.render(
  <div>
    <NestedHeaders />
    <MyFirstComponent />
    <FooterComponent />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
