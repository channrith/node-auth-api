const errorHandler = (err, req, res, next) => {
  const { message } = err;
  res.status(err.status).send({ error: { message } });
  next();
};

export default errorHandler;
