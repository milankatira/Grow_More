const express = require('express');

const app = express();

const cookieParser = require('cookie-parser');

app.use(express.json());

app.use(cookieParser());

const errorMiddleware = require('./middleware/error');

const bodyParser = require('body-parser');

const dotenv = require('dotenv');
const { routes } = require('./routes/index');
dotenv.config({ path: 'server/config/config.env' });

const cors = require('cors');
// const session = require('express-session');
// const RedisStore = require('connect-redis')(session);
// const RedisClient = require('./config/redis.config.js');
const user = require('./routes/user');
const post = require('./routes/post');
// const { routes } = require('./routes');

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     store: new RedisStore({ client: RedisClient.getRedisClientForSession() }),
//     saveUninitialized: true,
//     resave: false,
//   })
// );

const corsOption = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOption));
app.use('/api', [routes.post, routes.user]);
app.use(errorMiddleware);

module.exports = app;
