import React from "react";

function Footer() {
  return (
    <div className="w-full flex justify-center">
      <div className="text-center">
        <p>Harnak Spices @{new Date().getFullYear()}</p>
        <p className="text-gray-500 text-sm">Web design by Adamu M. Dankore </p>
      </div>
    </div>
  );
}

export default Footer;
