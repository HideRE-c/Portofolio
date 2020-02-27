const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(3000, () => console.log('port 3000!'));