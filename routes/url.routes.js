import express, { Router } from 'express'
import { handleCreateShortUrl } from '../controllers/url.controller.js';
const urlRouter = express.Router();

urlRouter.post('/', handleCreateShortUrl)


urlRouter.get ('/:shortId', ()=>{
    res.send({
        success : true,
        massage :" Get the urls "
    });
})


export default urlRouter;

