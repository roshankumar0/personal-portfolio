import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email Required !!"]
    },
    password: {
        type: String,
        required: true
    }
    
})
const User = mongoose.models.users|| mongoose.model("users", UserSchema)
export default User