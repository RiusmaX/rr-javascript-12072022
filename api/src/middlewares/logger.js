const loggerMiddleware = (req, res, next) => {
  if (req) {
    console.info(
      `[${new Date().toLocaleString()}] Request ${req.method} from ${req.ip} to ${req.url}`
    )
  }
  next()
}

module.exports = loggerMiddleware
