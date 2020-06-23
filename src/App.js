import React from "react";
import dataJson from "./data.json";
import TreeView from "./components/treeview";
import "./App.css";

const App = () => {
  const prevData = JSON.parse(localStorage.getItem("state"));

  const renderApp = () => {
    return (
      <div className="container">
        <TreeView data={prevData || dataJson} />
      </div>
    );
  };

  return renderApp();
};

export default App;
