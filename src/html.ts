const html = ({ body }: { body: string }) => `
  <!DOCTYPE html>
  <html>
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

export default html;
