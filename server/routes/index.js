const configureRoutes = (app) => {
  app.use('/api/auth', require('./api/auth'));
  app.use('/api/users', require('./api/users'));
  app.use('/api/mails', require('./api/mails'));
  app.use('/api/chips', require('./api/chips'));
  app.use('/api/currentTables',  require('./api/currentTables'));
  app.use('/', (req, res) => {
    res.status(200).send('Welcome');
  });
};

module.exports = configureRoutes;
