import express from 'express';

const PORT = 80;
const app = express();

app.listen(PORT, () => {
    console.log(`Server is Listening on http://localhost:${PORT}`)
});

app.get('/health', (req, res) => {
    res.send('Server Health OK');
});