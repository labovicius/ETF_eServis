import mongoose from 'mongoose'

const Schema = mongoose.Schema

let User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    index: {
        type: String
    },
    type_st: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    web: {
        type: String
    },
    title: {
        type: String
    },
    cabinet: {
        type: String
    },
    changePass: {
        type: Number
    },
    status: {
        type: Number
    },
    type: {
        type: String
    }
});

export default mongoose.model('User', User, 'users');