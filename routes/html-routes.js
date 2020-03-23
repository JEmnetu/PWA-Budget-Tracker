const router = require("express").Router();




router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + 'index.html'), (err)=>{
        if(err) throw err;
    });
})




module.exports = router;