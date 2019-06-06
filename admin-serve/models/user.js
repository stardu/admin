import mongoose from 'mongoose'

let Schema = mongoose.Schema;

const userSchema = new Schema({
    user_name: String,
    user_paw: String,
    user_id: Number,
    create_time: String
})

userSchema.index({ user_id: 1 });

let user = mongoose.model('user', userSchema);

export default user;