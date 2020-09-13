const axios = require('axios');

const isServer = typeof window === 'undefined';
function request({ method = 'GET', url, data, headers }, req, res) {
  if (isServer) {
    const session = req.session;
    const githubAuth = session.githubAuth || {};
    const headers = {};
  }
}
