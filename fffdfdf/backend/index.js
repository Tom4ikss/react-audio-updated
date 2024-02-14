const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs")
const app = express();

const PORT = process.env.PORT || 3011;


app.use(fileUpload({}));
app.use(cors({
    origin: 'http://localhost:3000'
}));

const Uploader =  (audio, image) => (new Promise((res, rej) => {
    const resData = {
        audio: audio.name
    }

    audio.mv(path.join("../frontend/src/uploads/audios", audio.name), err => {
        if(err) throw new Error(err)

    })
    setTimeout(() =>     res(JSON.stringify(resData)), 300)
}))

app.post('/upload', (req, res) => {
    const audioFile = req.files.audio
    let resData
    Uploader(audioFile)
    .then(data => resData = data)
    .then(() => {
        console.log(resData)
        res.send(resData)
    })
    
    
})

app.get('/get', (req, res) => {
    const audios = fs.readdirSync("../frontend/src/uploads/audios", {withFileTypes: true})
    const images = fs.readdirSync("../frontend/src/uploads/images", {withFileTypes:true})
  
    const resData = {
        audios,
        images
    }

    res.send(JSON.stringify(resData))
})

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});