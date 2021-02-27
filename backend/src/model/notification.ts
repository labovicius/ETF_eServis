import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Obavestenje = new Schema({
    type: {
        type: String
    },
    obavestenje: {
        type: String
    },
    datum: {
        type: String
    },
    dat: {
        type: String
    },
});

export default mongoose.model('Obavestenje', Obavestenje, 'notifications');