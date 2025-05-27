import express from 'express';
import connectDB from './db/db.connect.js';
import { PORT } from './config/env.js';
import urlRouter from './routes/url.routes.js';
import generateShortId from './utils/idGenrater.js';
const app = express();



app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello, Express with ES6!');
});
app.use('/api/v1/urls', urlRouter);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    connectDB();
    const res = generateShortId();
    console.log(res);
});
