import React from "react";
import ReactDOM from "react-dom";

//COMPONENTS
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

function Main() {
  return (
    <div>
      <Header />
      Hi from main
      <Footer />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));
