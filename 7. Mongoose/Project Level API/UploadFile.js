// yarn add multer

const express = require('express')
const app = express();
const Products = require('./product')
const multer = require('multer')
require('./config')
app.use(express.json());
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".pdf")
        }
    })
}).single("user_file");

app.post('/upload', upload, (req, resp) => {

    resp.send("Uploading")
})
app.listen(5000)