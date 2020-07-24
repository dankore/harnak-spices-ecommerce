import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import Footer from './app/components/shared/Footer';
import Header from './app/components/shared/Header';
import LoadingDotsIcon from './app/components/shared/LoadingDotsAnimation';
import { StaticRouter as Router } from 'react-router-dom';
import StateContext from './app/contextsProviders/StateContext';

function RENDER_THIS_HTML() {
  return (
    <StateContext.Provider>
      <Router>
        <Header />
        <div>
          <LoadingDotsIcon />
        </div>
        <Footer />
      </Router>
    </StateContext.Provider>
  );
}

function html(x) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Harnak Spices</title>
      <link rel="stylesheet" href="/assets/css/main.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js"
        integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossorigin="anonymous">
      </script>
    </head>
    <body style="background-color: #f0f2f5; -webkit-font-smoothing: antialiased;">
      <div id="app">
      ${x}
      </div>
    </body>
  </html>
  `;
}

const reactHtml = ReactDOMServer.renderToString(<RENDER_THIS_HTML />);

const overallHtmlString = html(reactHtml);

const fileName = './app/index-template.html';
const stream = fs.createWriteStream(fileName);
stream.once('open', () => {
  stream.end(overallHtmlString);
});
