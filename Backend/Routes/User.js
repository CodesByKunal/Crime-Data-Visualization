import { Router } from "express";

const router = Router();

router.get('/v1', (req, res) => {
    res.cookie('name', 'kunal', { signed: true });
    res.send('Hello From Router');
})

router.get('/sc', (req, res) => {
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})

export default router;