import express from "express";
import cookieParser from 'cookie-parser';
import userRouter from './Routes/User.js'

const PORT = '80'
const app = express();

app.listen(PORT, () => {
    console.log('Server is Listening....')
})

app.use(cookieParser("bitandbyte"))

app.use('/', userRouter);