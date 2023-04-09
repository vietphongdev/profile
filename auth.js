function decodeCredentials(authHeader) {
  const credentials = Buffer.from(authHeader.split(" ")[1] || "", "base64")
    .toString()
    .split(":");

  return credentials;
}

function authMiddleware(req, res, next) {
  const [username, password] = decodeCredentials(
    req.headers.authorization || ""
  );

  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    return next();
  }

  res.set("WWW-Authenticate", 'Basic realm="user_pages"');
  res.status(401).sendFile(`${__dirname}/unauthorized.html`);
}

module.exports = authMiddleware;
