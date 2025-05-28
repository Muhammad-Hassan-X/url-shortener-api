import express from 'express';
import connectDB from './db/db.connect.js';
import { PORT } from './config/env.js';
import urlRouter from './routes/url.routes.js';
import handleRedirection from './controllers/redirect.controller.js';
const app = express();



app.use(express.json());


app.get('/:Id', handleRedirection) ;
app.use('/api/v1/urls', urlRouter);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    connectDB();
});
