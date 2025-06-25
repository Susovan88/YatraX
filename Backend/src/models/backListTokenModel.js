import mongoose from 'mongoose';

const backListTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '7d' // Token will expire after 7 days
    }
});

const BacklistToken = mongoose.model('BacklistToken', backListTokenSchema);
export default BacklistToken;