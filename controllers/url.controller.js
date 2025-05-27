import Url from '../models/url.model.js';
import generateShortId from '../utils/idGenrater.js';

export const handleCreateShortUrl = async (req, res) => {
    const { originalUrl } = req.body;
    if (!originalUrl) {
        return res.send.status(400)(
            {
                success: false,
                massage: "Provide the Orignal Url"
            }
        )
    }
    const shortId = generateShortId();
    const newUrl = new Url({ originalUrl, shortId });
    await newUrl.save();
    res.send({ shortId });
};
