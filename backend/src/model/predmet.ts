import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Predmet = new Schema({
    naziv: {
        type: String
    },
    smer: {
        type: String
    },
    sifra: {
        type: String
    },
    semestar: {
        type: Number
    },
    obavestenja: {
        type: Array
    },
    ispit: {
        type: Array
    },
    grupa: {
        type: Array
    },
    predavanja: {
        type: Array
    },
    vezbe: {
        type: Array
    },
    projekat: {
        type: Array
    },
    informacije: {
        type: Array
    },
    laboratorija: {
        type: Array
    },
    nastavnik: {
        type: Array
    },
    student: {
        type: Array
    }
});

export default mongoose.model('Predmet', Predmet, 'predmeti');