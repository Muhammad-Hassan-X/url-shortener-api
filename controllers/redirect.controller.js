import Url from "../models/url.model.js";
import express from "express";

const handleRedirection = async (req, res) => {
    const { Id } = req.params;

    if (!Id) {
        return res.status(400).send({
            success: false,
            message: "Provide the URL"
        });
    }

    const { originalUrl } = await Url.findOne({
        'shortId': Id
    });



    console.log(originalUrl);

    res.redirect(originalUrl);
};

export default handleRedirection;
