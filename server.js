const { connectDB, mongoose } = require('./config/db');

const config = require('./config/settings');

const app = require('./app');


connectDB();

mongoose.connection.on('error', () => {
  throw new Error('Failed to connect to database server!')
});

app.listen(config.PORT, (err) => {
  if (err) {
    console.log(err);
  } 
  console.info('Server started on port %s.', config.PORT);
});

