const path = require('path');
const serveStatic = require('serve-static');

// Em desenvolvimento, serve arquivos da pasta static em / (ex.: /LogoBleia.svg, /pastor.png)
const staticPath = path.join(__dirname, 'static');
module.exports = function (app) {
  app.use(serveStatic(staticPath, { index: false }));
};
