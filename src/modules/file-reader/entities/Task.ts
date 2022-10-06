import mongoose, { ObjectId } from 'mongoose';
const TaskSchema = new mongoose.Schema({
    filepath: String,
    filename: String,
    createdAt: Date,
    processed: {
        default: [],
        type: Array,
    },
    errored: {
        default: [],
        type: Array,
    },
    status: String,
    customers: {
        default: [],
        type: Object
    },
    noOfCustomers: {
        default: 0,
        type: Number,
    },
});

export const Task = mongoose.model('Tasks', TaskSchema);
