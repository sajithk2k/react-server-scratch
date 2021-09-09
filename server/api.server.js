'use strict';

const register = require('react-server-dom-webpack/node-register');
register();
const babelRegister = require('@babel/register');

babelRegister({
  ignore: [/\/(build|server|node_modules)\//],
  presets: [['react-app', { runtime: 'automatic' }]],
  plugins: ['@babel/transform-modules-commonjs'],
});

const express = require('express');
const { readFileSync } = require('fs');
const { pipeToNodeWritable } = require('react-server-dom-webpack/writer');
const path = require('path');
const React = require('react');
const ReactApp = require('../src/App.server').default;

const PORT = 4000;
const app = express();

app.use(express.json());

app.use(express.static('build'));
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('React Notes listening at 4000...');
});

async function renderReactTree(res, props) {
  const manifest = readFileSync(
    path.resolve(__dirname, '../build/react-client-manifest.json'),
    'utf8'
  );
  const moduleMap = JSON.parse(manifest);
  pipeToNodeWritable(React.createElement(ReactApp), res, moduleMap);
}

function sendResponse(req, res, redirectToId) {
  const location = JSON.parse(req.query.location);
  if (redirectToId) {
    location.selectedId = redirectToId;
  }
  res.set('X-Location', JSON.stringify(location));
  renderReactTree(res, {
    selectedId: location.selectedId
  });
}

app.get('/react', function (req, res) {
  sendResponse(req, res, null);
});

app.get("/", function(req, res) {
  const html = readFileSync(
    path.resolve(__dirname, '../build/index.html'),
    'utf8'
  );
  res.send(html);
})