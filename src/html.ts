const html = ({ body }: { body: string }) => `
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>
      <div id="root">${ body }</div>
    <script src='js/client.js'></script>
  </html>
`;

export default html;
