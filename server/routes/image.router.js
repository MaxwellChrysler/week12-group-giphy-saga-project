const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();



router.get('/:search', (req, res) => {
    console.log('in server get, and input search term should arrive as req.params.search, which is:', req.params.search);
    const searchTerm = req.params.search;
  
    console.log('searchterm' , searchTerm);
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchTerm}&limit=10`)
    
        .then((response) => {
            console.log(response.data,'console loging in image router');
            res.send(response.data);
        })
        .catch((error) => {
            console.log('Error!', error);
        })
})

module.exports = router;