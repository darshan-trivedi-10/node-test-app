const express = require('express');
const os = require('os');
const app = express();
const port = 5656;

app.get('/', (req, res) => {
    res.send(`Hello from server: ${os.hostname()} at ${req.socket.localAddress}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
