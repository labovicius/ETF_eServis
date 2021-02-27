import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import user from './model/user';
import notification from './model/notification';
import predmet from './model/predmet';
import typesNot from './model/typesNot';

const app = express();

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/projekat');

const conn = mongoose.connection;

conn.once('open', () => {
    console.log('mongo open');
});

const router = express.Router();

router.route('/login').post((req, res) => {

    let username = req.body.username;
    let password = req.body.password;

    user.findOne({ 'username': username, 'password': password }, (err, user) => {
        if (err) console.log(err)
        else res.json(user);
    })

});

router.route('/register').post((req, res) => {
    let u = new user(req.body);
    u.save().then(u => {
        res.status(200).json({ 'user': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'user': 'no' });
    })
});


router.route('/add_zaposleni').post((req, res) => {
    let username = req.body.username;
    let flag = 1;
    user.findOne({ 'username': username }, (err, user) => {
        flag = 0;
        if (err) console.log(err)
    })
    if (flag) {
        let u = new user(req.body);
        u.save().then(u => {
            res.status(200).json({ 'user': 'ok' });
        }).catch(err => {
            res.status(400).json({ 'user': 'no' });
        })
    }
    else {
        res.status(200).json({ 'user': 'postoji' });
    }
});

router.route('/add_student').post((req, res) => {
    let u = new user(req.body);
    u.save().then(u => {
        res.status(200).json({ 'user': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'user': 'no' });
    })
});

router.route('/addStudentPredmet').post((req, res) => {
    let naziv = req.body.naziv;
    let student = req.body.student;

    predmet.collection.updateOne({ 'naziv': naziv }, {

        $push: {
            'student': student,
        }
    })

    user.collection.updateOne({ 'username': student }, {
        $push: {
            'predmeti': naziv
        }
    });

    res.json({ poruka: 1 });
});


router.route('/odobravanje').post((req, res) => {
    let sifra = req.body.sifra;
    let student = req.body.username;


    let s = {
        naziv: student,
        odobreno: 0
    };

    let p = {
        sifra: sifra,
        odobreno: 0
    };

    predmet.collection.updateOne({ 'sifra': sifra }, {

        $pull: {
            'student': s
        }
    })

    user.collection.updateOne({ 'username': student }, {
        $pull: {
            'predmeti': p
        }
    });


    let s1 = {
        naziv: student,
        odobreno: 1
    };

    let p1 = {
        sifra: sifra,
        odobreno: 1
    };

    predmet.collection.updateOne({ 'sifra': sifra }, {

        $push: {
            'student': s1,
        }
    })

    user.collection.updateOne({ 'username': student }, {
        $push: {
            'predmeti': p1,
        }
    });

    res.json({ poruka: 1 });
});

router.route('/odbijanje').post((req, res) => {
    let sifra = req.body.sifra;
    let student = req.body.username;


    let s = {
        naziv: student,
        odobreno: 0
    };

    let p = {
        sifra: sifra,
        odobreno: 0
    };

    predmet.collection.updateOne({ 'sifra': sifra }, {

        $pull: {
            'student': s
        }
    })

    user.collection.updateOne({ 'username': student }, {
        $pull: {
            'predmeti': p
        }
    });

    res.json({ poruka: 1 });
});
router.route('/prijavi').post((req, res) => {
    let sifra = req.body.sifra;
    let student = req.body.username;

    let s = {
        naziv: student,
        odobreno: 0
    };

    let p = {
        sifra: sifra,
        odobreno: 0
    };

    predmet.collection.updateOne({ 'sifra': sifra }, {

        $push: {
            'student': s,
        }
    })

    user.collection.updateOne({ 'username': student }, {
        $push: {
            'predmeti': p,
        }
    });

    res.json({ poruka: 1 });
});

router.route('/odjavi').post((req, res) => {
    let sifra = req.body.sifra;
    let student = req.body.username;


    let s = {
        naziv: student,
        odobreno: 0
    };

    let p = {
        sifra: sifra,
        odobreno: 0
    };

    predmet.collection.updateOne({ 'sifra': sifra }, {

        $pull: {
            'student': s
        }
    })

    user.collection.updateOne({ 'username': student }, {
        $pull: {
            'predmeti': p
        }
    });

    res.json({ poruka: 1 });
});

router.route('/add_predmet').post((req, res) => {

    let naziv = req.body.naziv;
    let smer = req.body.smer;
    let cilj = req.body.cilj;
    let poeni = req.body.poeni;
    let sifra = req.body.sifra;
    let fond = req.body.fond;
    let semestar = req.body.semestar;
    let type = req.body.type;
    let textI = req.body.textI;
    let putanjaI = req.body.putanjaI;
    let textO = req.body.textO;
    let putanjaO = req.body.putanjaO;
    let textL = req.body.textL;
    let putanjaL = req.body.putanjaL;
    let textP = req.body.textP;
    let putanjaP = req.body.putanjaP;
    let textPr = req.body.textPr;
    let putanjaPr = req.body.putanjaPr;
    let textV = req.body.textV;
    let putanjaV = req.body.putanjaV;
    let datum = req.body.datum;

    let info = {
        tip: type,
        fond: fond,
        poeni: poeni,
        cilj: cilj
    };

    let ob = {
        datum: datum,
        text: textO,
        putanja: putanjaO
    };

    let proj = {
        text: textP,
        putanja: putanjaP
    };

    let pr = {
        text: textPr,
        putanja: putanjaPr
    };

    let v = {
        text: textV,
        putanja: putanjaV
    };

    let i = {
        text: textI,
        putanja: putanjaI
    }

    let lab = {
        text: textL,
        putanja: putanjaL
    }

    predmet.collection.insertOne({
        'naziv': naziv, 'smer': smer, 'sifra': sifra, 'semestar': semestar, 'obavestenja': ob, 'informacije': info,
        'projekat': proj, 'predavanja': pr, 'vezbe': v, 'ispit': i, 'laboratorija': lab
    });

    res.json({ poruka: 1 });
});


router.route('/changePass').post((req, res) => {

    let username = req.body.username;
    let password = req.body.old_password;
    let new_password = req.body.new_password;

    user.collection.updateOne({ "username": username, "password": password }, { $set: { "password": new_password }, $inc: { "changePass": -1 } });

    user.findOne({ 'username': username, 'password': new_password }, (err, user) => {
        if (err) console.log(err)
        else res.json(user);
    })

});

router.route('/plus').post((req, res) => {

    let username = req.body.data.username;


    user.collection.updateOne({ "username": username, }, { $set: { "status": 1 } });

});

router.route('/minus').post((req, res) => {

    let username = req.body.data.username;


    user.collection.updateOne({ "username": username, }, { $set: { "status": 0 } });

});


router.route('/getNotifications').get((req, res) => {

    notification.find({}, (err, n) => {
        if (err) console.log(err)
        else res.json(n);
    })

});

router.route('/getPredmeti').get((req, res) => {

    predmet.find({}, (err, n) => {
        if (err) console.log(err)
        else res.json(n);
    }).sort({ 'semestar': 1, 'naziv': 1 });

});

router.route('/getPredmetiSI').get((req, res) => {

    predmet.find({ 'smer': "SI" }, (err, n) => {
        if (err) console.log(err)
        else res.json(n);
    }).sort({ 'semestar': 1, 'naziv': 1 });

});


router.route('/getPredmetiRTI').get((req, res) => {

    predmet.find({ 'smer': 'RTI' }, (err, n) => {
        if (err) console.log(err)
        else res.json(n);
    }).sort({ 'semestar': 1, 'naziv': 1 });

});

router.route('/getStaff').get((req, res) => {

    user.find({ 'type': 'Z' }, (err, s) => {
        if (err) console.log(err)
        else res.json(s);
    }).sort({ 'surname': 1 });

});

router.route('/getStudents').get((req, res) => {

    user.find({ 'type': 'S' }, (err, s) => {
        if (err) console.log(err)
        else res.json(s);
    }).sort({ 'surname': 1 });

});

router.route('/getTypeNot').get((req, res) => {

    typesNot.find({}, (err, n) => {
        if (err) console.log(err)
        else res.json(n);

    })

});

router.route('/getUsers').get((req, res) => {

    user.find({}, (err, u) => {
        if (err) console.log(err)
        else res.json(u);
    }).sort({ 'surname': 1 });

});



router.route('/addGroupP').post((req, res) => {
    let naziv = req.body.naziv;
    let broj = req.body.br1 + 1;

    let predavanja = {
        broj: broj,
        profesor: req.body.profesorP
    };

    let predmeti = {
        naziv: naziv,
        grupa: "P" + broj
    }
    predmet.collection.updateOne({ 'naziv': naziv }, {

        $inc: { "grupa.p": 1 },
        $set: { 'grupa.v': req.body.br2 },
        $push: {
            'grupa.predavanja': predavanja,
            'nastavnik': req.body.profesorP
        }
    })

    user.collection.updateOne({ 'username': req.body.profesorP }, {
        $push: {
            'predmeti': predmeti
        }
    });

    res.json({ poruka: 1 });
});

router.route('/addGroupV').post((req, res) => {
    let naziv = req.body.naziv;
    let broj = req.body.br2 + 1
    let vezbe = {
        broj: broj,
        profesor: req.body.profesorV
    };

    let predmeti = {
        naziv: naziv,
        grupa: "V" + broj
    }

    predmet.collection.updateOne({ 'naziv': naziv }, {

        $inc: { "grupa.v": 1 },
        $set: { 'grupa.p': req.body.br1 },

        $push: {
            'grupa.vezbe': vezbe,
            'nastavnik': req.body.profesorV
        }
    });

    user.collection.updateOne({ 'username': req.body.profesorV }, {
        $push: {
            'predmeti': predmeti
        }
    });
    res.json({ poruka: 1 });
});

router.route('/editS').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let name = req.body.name;
    let surname = req.body.surname;
    let index = req.body.index;
    let type_st = req.body.type_st;
    let changePass = req.body.changePass;
    let status = req.body.status;
    let type = req.body.type;

    user.collection.updateOne({ 'username': username }, {
        $set: {
            'password': password, 'name': name, 'surname': surname, "index": index,
            'type_st': type_st, 'changePass': changePass, 'status ': status, 'type': type
        }
    })
    res.json({ poruka: 1 });
});

router.route('/editZ').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let name = req.body.name;
    let surname = req.body.surname;
    let address = req.body.address;
    let phone = req.body.phone;
    let web = req.body.web;
    let title = req.body.title;
    let cabinet = req.body.cabinet;
    let changePass = req.body.changePass;
    let status = req.body.status;
    let type = req.body.type;

    user.collection.updateOne({ 'username': username }, {
        $set: {
            'password': password, 'name': name, 'surname': surname, "address": address, 'title': title, "cabinet": cabinet,
            'web': web, 'phone': phone, 'changePass': changePass, 'status ': status, 'type': type
        }
    })
    res.json({ poruka: 1 });
});


router.route('/editP').post((req, res) => {

    let naziv = req.body.naziv;
    let smer = req.body.smer;
    let cilj = req.body.cilj;
    let poeni = req.body.poeni;
    let sifra = req.body.sifra;
    let fond = req.body.fond;
    let semestar = req.body.semestar;
    let type = req.body.type;
    let textI = req.body.textI;
    let putanjaI = req.body.putanjaI;
    let textO = req.body.textO;
    let putanjaO = req.body.putanjaO;
    let textL = req.body.textL;
    let putanjaL = req.body.putanjaL;
    let textP = req.body.textP;
    let putanjaP = req.body.putanjaP;
    let textPr = req.body.textPr;
    let putanjaPr = req.body.putanjaPr;
    let textV = req.body.textV;
    let putanjaV = req.body.putanjaV;
    let datum = req.body.datum;



    let info = {
        tip: type,
        fond: fond,
        poeni: poeni,
        cilj: cilj
    };

    let ob = {
        datum: datum,
        text: textO,
        putanja: putanjaO
    };

    let proj = {
        text: textP,
        putanja: putanjaP
    };

    let pr = {
        text: textPr,
        putanja: putanjaPr
    };

    let v = {
        text: textV,
        putanja: putanjaV
    };

    let i = {
        text: textI,
        putanja: putanjaI
    }

    let lab = {
        text: textL,
        putanja: putanjaL
    }

    predmet.collection.deleteOne({ 'sifra': sifra });

    predmet.collection.insertOne({
        'naziv': naziv, 'smer': smer, 'sifra': sifra, 'semestar': semestar, 'obavestenja': ob, 'informacije': info,
        'projekat': proj, 'predavanja': pr, 'vezbe': v, 'ispit': i, 'laboratorija': lab
    });

    res.json({ poruka: 1 });
});

router.route('/deletePredavanja').post((req, res) => {
    let sifra = req.body.sifra;

    let text = req.body.text;
    let putanja = req.body.putanja;

    let predavanja = {
        text: text,
        putanja: putanja
    };

    predmet.collection.updateOne({ 'sifra': sifra }, {

        $pull: {
            'predavanja': predavanja
        }
    })

    res.json({ poruka: 1 });
});



router.route('/deleteVezbe').post((req, res) => {
    let sifra = req.body.sifra;

    let text = req.body.text;
    let putanja = req.body.putanja;

    let vezbe = {
        text: text,
        putanja: putanja
    };

    predmet.collection.updateOne({ 'sifra': sifra }, {

        $pull: {
            'vezbe': vezbe
        }
    })

    res.json({ poruka: 1 });
});



router.route('/deleteIspit').post((req, res) => {
    let sifra = req.body.sifra;

    let text = req.body.text;
    let putanja = req.body.putanja;

    let ispit = {
        text: text,
        putanja: putanja
    };

    predmet.collection.updateOne({ 'sifra': sifra }, {

        $pull: {
            'ispit': ispit
        }
    })

    res.json({ poruka: 1 });
});

router.route('/deleteProjekat').post((req, res) => {
    let sifra = req.body.sifra;

    let putanja = req.body.putanja;

    let materijali = {
        putanja: putanja
    };

    let projekat = {
        'materijali': materijali
    };

    predmet.collection.updateOne({ 'sifra': sifra }, {

        $pull: {
            'projekat': projekat
        }
    })

    res.json({ poruka: 1 });
});


router.route('/deleteLab').post((req, res) => {
    let sifra = req.body.sifra;

    let putanja = req.body.putanja;

    let materijali = {
        putanja: putanja
    };

    let lab = {
        'materijali': materijali
    };

    predmet.collection.updateOne({ 'sifra': sifra }, {

        $pull: {
            'laboratorija': lab
        }
    })

    res.json({ poruka: 1 });
});


router.route('/change').post((req, res) => {
    let sifra = req.body.sifra;

    let p = req.body.predmet;

    p.sifra = req.body.sifra;

    predmet.collection.deleteOne({ 'sifra': sifra });

    let pr = new predmet(p);
    pr.save().then(pr => {
        res.status(200).json({ 'poruka': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'poruka': 'no' });
    })


});

router.route('/novoObavestenje').post((req, res) => {

    let text = req.body.tekst;
    let putanja = req.body.file;
    let datum = req.body.datum;
    let nastavnik = req.body.nastavnik;

    let obavestenje = {
        text: text,
        putanja: putanja,
        datum: datum,
        nastavnik: nastavnik
    }
    predmet.collection.findOneAndUpdate({ 'naziv': req.body.predmet }, { $push: { 'obavestenja': obavestenje } });
    res.json({ poruka: 1 });
});

router.route('/addPredavanja').post((req, res) => {

    let putanja = req.body.putanja;
    let text = req.body.putanja;
    let sifra = req.body.sifra;

    let predavanje = {
        text: text,
        putanja: putanja
    }

    predmet.collection.findOneAndUpdate({ 'sifra': sifra }, { $push: { 'predavanja': predavanje } });
    res.json({ poruka: 1 });
});

router.route('/addVezbe').post((req, res) => {

    let putanja = req.body.putanja;
    let text = req.body.putanja;
    let sifra = req.body.sifra;

    let vezbe = {
        text: text,
        putanja: putanja
    }

    predmet.collection.findOneAndUpdate({ 'sifra': sifra }, { $push: { 'vezbe': vezbe } });
    res.json({ poruka: 1 });
});

router.route('/addProjekat').post((req, res) => {

    let putanja = req.body.putanja;
    let sifra = req.body.sifra;

    let projekat = {
        'materijali': putanja
    }

    predmet.collection.findOneAndUpdate({ 'sifra': sifra }, { $push: { 'projekat': projekat } });
    res.json({ poruka: 1 });
});

router.route('/addLab').post((req, res) => {

    let putanja = req.body.putanja;
    let sifra = req.body.sifra;

    let lab = {
        'materijali': putanja
    }


    predmet.collection.findOneAndUpdate({ 'sifra': sifra }, { $push: { 'laboratorija': lab } });
    res.json({ poruka: 1 });
});

router.route('/addIspit').post((req, res) => {

    let putanja = req.body.putanja;
    let text = req.body.putanja;
    let sifra = req.body.sifra;

    let ispit = {
        text: text,
        putanja: putanja
    }

    predmet.collection.findOneAndUpdate({ 'sifra': sifra }, { $push: { 'ispit': ispit } });
    res.json({ poruka: 1 });
});


router.route('/savePredmet').post((req, res) => {
    let sifra = req.body.sifra;

    let p = req.body.predmet;

    p.sifra = req.body.sifra;

    predmet.collection.deleteOne({ 'sifra': sifra });

    let pr = new predmet(p);
    pr.save().then(pr => {
        res.status(200).json({ 'predmet': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'predmet': 'no' });
    })


});

router.route('/addO').post((req, res) => {
    let sifra = req.body.sifra;

    let p = req.body.predmet;


    predmet.collection.deleteOne({ 'sifra': sifra });

    let pr = new predmet(p);

    pr.save().then(pr => {
        res.status(200).json({ 'predmet': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'predmet': 'no' });
    })
});


router.route('/deleteO').post((req, res) => {
    let sifra = req.body.sifra;

    let text = req.body.text;
    let datum = req.body.datum;
    let putanja = req.body.putanja;
    let nastavnik = req.body.nastavnik;

    predmet.collection.updateOne({ 'sifra': sifra }, {

        $pull: {
            'obavestenja': { datum, text, putanja, nastavnik }
        }
    })

    res.json({ poruka: 1 });
});


router.route('/deleteS').post((req, res) => {
    let username = req.body.index;

    user.collection.deleteOne({ "username": username });

    let s2 = {
        naziv: username
    };

    predmet.collection.updateMany({}, {

        $pull: {
            'student': s2
        }
    })

    res.json({ poruka: 1 });
});


router.route('/deleteZ').post((req, res) => {
    let username = req.body.username;

    user.collection.deleteOne({ "username": username });


    predmet.collection.updateMany({}, {

        $pull: {
            'nastavnik': username
        }
    });

    res.json({ poruka: 1 });
});

router.route('/deleteP').post((req, res) => {
    let sifra = req.body.sifra;
    let naziv = req.body.naziv;
    predmet.collection.deleteOne({ "sifra": sifra });

    let p1 = {
        sifra: sifra
    };

    let p2 = {
        naziv: naziv
    };

    user.collection.updateMany({}, {
        $pull: {
            'predmeti': p1
        }
    });

    user.collection.updateMany({}, {
        $pull: {
            'predmeti': p2
        }
    });


    res.json({ poruka: 1 });
});


router.route('/setNewType').post((req, res) => {

    let tip = req.body.novi_tip;
    typesNot.collection.findOneAndUpdate({ "f": 1 }, { $push: { 'types': tip } });

    res.json({ poruka: 1 });

});

router.route('/createNewNotification').post((req, res) => {

    let tip = req.body.tip;
    let obavestenje = req.body.obavestenje;
    let datum = req.body.datum;

    notification.collection.insertOne({ "type": tip, "obavestenje": obavestenje, "datum": datum });

    res.json({ poruka: 1 });

});

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
