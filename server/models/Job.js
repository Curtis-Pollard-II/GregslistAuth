import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const JobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    hours: {
        type: Number,
        required: true
    },
    startSalary: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        minLength: 3
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});