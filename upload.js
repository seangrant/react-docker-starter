export default (req, res, next) => {
  res.send(200, 'Good!');
  next();
};
