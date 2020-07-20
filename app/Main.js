import React from "react";
import ReactDOM from "react-dom";

//COMPONENTS
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Homepage from "./pages/Homepage";

function Main() {
  return (
    <div>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));
