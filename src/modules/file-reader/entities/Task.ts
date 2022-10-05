import mongoose from 'mongoose';
const TaskSchema = new mongoose.Schema({
    filepath: String,
    filename: String,
    createdAt: Date,
    processed: Array,
    errored: Array,
    status: String,
});

export const Task = mongoose.model('Task', TaskSchema);
