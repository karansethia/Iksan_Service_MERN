import mongoose from 'mongoose';
const { Schema } = mongoose;

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    storeLocation: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        min: 0,
        max: 5
    },
    servicesProvided:{
        type: [String],
    },
    Pricing: {
        type: Number
    }
    
});

export default mongoose.model("Service", ServiceSchema)