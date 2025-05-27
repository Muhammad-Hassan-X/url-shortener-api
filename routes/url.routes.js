import express, { Router } from 'express'
import { handleCreateShortUrl } from '../controllers/url.controller.js';
const urlRouter = express.Router();

urlRouter.post('/', handleCreateShortUrl).get('/:shortId', (req, res) => {
    res.json({ message: 'Redirecting to the original url' });
}).get('/', (req, res) => {
    res.json({ message: 'Get all the urls' });
}).delete('/:shortId', (req, res) => {
    res.json({ message: 'Delete the url' });
});


export default urlRouter;

