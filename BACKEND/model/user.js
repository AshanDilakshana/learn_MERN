import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true, 
        unique: true,
    },

    firstName :{
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },

    role:{
        type: String,
        required: true,
        default: 'user',
    },

    profilePicture: {
        type: String,
        default: 'https://bst.icons8.com/wp-content/uploads/2024/05/parakeet_female_profile_icon.webp',
    },
    isEmailVerified: {  
        type: Boolean,
        default: false,
    },

});

const User = mongoose.model('User', userSchema);
export default User;