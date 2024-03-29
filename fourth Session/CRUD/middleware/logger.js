const logger = (req, res, next) => {
  console.log("Send response");
  next();
};

module.exports = logger;
