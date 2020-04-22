import React from 'react';

const html = ({ body, locale }: { body: string, locale: string }) => `
  <!DOCTYPE html>
  <html lang=${ locale }>
    <head>
      <link rel="stylesheet" href="main.css">
      <style>
        #root {
          display: flex;
          justify-content: center;
        }
      </style>
    </head>
    <body>
      <div id="root">${ body }</div>
    <script src='js/client.js'></script>
  </html>
`;

export const getHeadSection = () => (
  <React.Fragment>
    <head>
      <link rel="stylesheet" href="main.css" />
      <style>
        {
          `#root {
            display: flex;
            justify-content: center;
          }`
        }
      </style>
    </head>
  </React.Fragment>
);


export default html;
