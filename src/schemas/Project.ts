import { Document, Schema, model } from "mongoose";
import IProject from "../models/IProject";

interface IProjectModel extends IProject, Document {
}

const ProjectSchema: Schema = new Schema({
    code: {
        type: String,
        require: true
    },
    name: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true,
        default: "ALEC"
    },
    workerBusTime: {
        type: String,
        required: true,
        enum: ["5am - 8:15am", "5pm - 7pm"]
    },
    restrictedTime: {
        type: String,
        required: true,
        enum: ["7:30am - 9:30am", "1pm - 3pm", "5:30pm - 8pm"]
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: function() { new Date(); }
    }
}, {
    collection: "Projects",
    read: "nearest"
});

export default model<IProjectModel>("Project", ProjectSchema);
