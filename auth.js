function decodeCredentials(authHeader) {
  // authHeader: Basic YWRtaW46YWRtaW4=
  const credentials = Buffer.from(authHeader.split(' ')[1] || '', 'base64')
        // <Buffer 75 73 65 72 6e 61 6d 65 3a 70 61 73 73 77 6f 72 64>
        .toString()
        // username:password
        .split(':')
        // ['username', 'password']

  return credentials;
}

function authMiddleware(req, res, next) {
  const [username, password] = decodeCredentials(req.headers.authorization || '');

  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    return next();
  }

  res.set('WWW-Authenticate', 'Basic realm="user_pages"');
  res.status(401).sendFile(`${__dirname}/public/unauthorized.html`);
}

module.exports = authMiddleware;