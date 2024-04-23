import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import recordsRouter from './Routes/records.js';
import signupRouter from './Routes/signup.js';
import loginRouter from './Routes/login.js';

const PORT = 80;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('screte'));

app.listen(PORT, () => {
    console.log(`Server is Listening on http://localhost:${PORT}`)
});

mongoose.connect('mongodb://localhost:27017/DataSet');

app.get('/health', (req, res) => {
    res.send('Server Health OK');
});

app.use('/records', recordsRouter);

app.use('/signup', signupRouter);

app.use('/login', loginRouter);