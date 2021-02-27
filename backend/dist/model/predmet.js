"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
exports.default = mongoose_1.default.model('Predmet', Predmet, 'predmeti');
//# sourceMappingURL=predmet.js.map