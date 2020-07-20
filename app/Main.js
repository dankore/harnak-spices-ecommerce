import React from "react";
import ReactDOM from "react-dom";

//COMPONENTS
import Footer from "./components/shared/Footer";

function Main() {
  return (
    <div>
      Hi from main
      <Footer />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));
