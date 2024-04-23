import mongoose from "mongoose";

const userObject = {
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
    },
    admin: {
        type: Boolean,
        default: false
    }
}
const userSchema = new mongoose.Schema(userObject);

const User = mongoose.model('user', userSchema);

export default User;