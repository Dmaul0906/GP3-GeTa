const otor = (roles) => (req, res, next) => {
  try {
    const currentUser = req.currentUser;

    if (!roles.includes(currentUser.role)) {
      const newError = new Error();
      newError.name = "ErrorUser";
      newError.message = "unauthorized Access";

      throw newError;
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = otor;
