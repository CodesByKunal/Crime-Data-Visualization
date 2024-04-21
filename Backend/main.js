import express from 'express';
import mongoose from 'mongoose';
import recordsRouter from './Routes/records.js';

const PORT = 80;
const app = express();

app.listen(PORT, () => {
    console.log(`Server is Listening on http://localhost:${PORT}`)
});

mongoose.connect('mongodb://localhost:27017/DataSet');

app.get('/health', (req, res) => {
    res.send('Server Health OK');
});

app.use('/records', recordsRouter);