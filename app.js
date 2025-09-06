const express =require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ ok: true, uptime: process.uptime(), timestamp: Date.now() });
})
module.exports = app;