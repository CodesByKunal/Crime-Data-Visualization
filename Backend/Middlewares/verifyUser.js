import User from "../Models/user.js";
import jwt from "jsonwebtoken";

const verifyUser = async (req, res, next) => {
    try {

        const access_token = req.signedCookies.access_token;
        if (!access_token) {
            return res.status(401).send('Not Allowed');
        }

        const decoded = await jwt.verify(access_token, 'shhhhh');

        const user = await User.findById(decoded._id);
        if (!user.admin) {
            return res.status(401).send('Not Allowed');
        }

        next();
    } catch (error) {
        console.error('verifyUser', error)
    }

}

export default verifyUser;