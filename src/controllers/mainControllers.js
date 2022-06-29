const path = require ('path')


const controller = {
    index: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'))
    },

    contact: (req,res) => {
        res.send("Soy contact");
    },

    about: (req,res) => {
        res.send("Somos el grupo .....");
    }
};

module.exports = controller;
