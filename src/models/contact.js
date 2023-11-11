import mongoose from "mongoose"

const ContactUser = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email Required !!"]
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }

})
const Contact = mongoose.models.contacts || mongoose.model("contacts", ContactUser)
export default Contact