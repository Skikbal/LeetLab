const AsyncHandler = (requestrHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestrHandler(req, res, next)).catch((err) => next(err));
  };
};

export default AsyncHandler;
