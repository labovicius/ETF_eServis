import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Tipovi = new Schema({
    types: {
        type: Array
    },
    f: {
        type: Number
    }
});

export default mongoose.model('Tipovi', Tipovi, 'typesNotif');