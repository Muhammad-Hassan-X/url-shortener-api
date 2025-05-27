import mongoose from "mongoose";

import { Schema } from 'mongoose'
const urlSechema = new Schema({
    originalUrl: {
        type: String,
        required: true,
    },
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    clicks: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: "",
    },

}, { timestramps: ture })

const Url = mongoose.model('Url', urlSechema);

export default Url;

