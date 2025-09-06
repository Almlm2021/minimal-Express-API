const axios = require('axios');
const express = require("express");
const { partitionPosts} = require("../lib/utils");




const router = express.Router();

const url = "https://jsonplaceholder.typicode.com/posts";




router.get("/posts", async (req, res) => {
    try {
        const response = await axios.get(url,{
            timeout:3000,
            headers: {
                Accept: 'application/json',
            },
        });
        const {long, short}=  partitionPosts(response.data);
        res.status(200).json({long, short});
    } catch (error) {
        if (error.response?.status) {
            return res.status(502)
                .json({
                    error: "Bad Gateway",
                    upstreamStatus: error.response.status,
                    url,
                });
        }
        res.status(500).json({error: "Unexpected"});
    }
});

module.exports = router;