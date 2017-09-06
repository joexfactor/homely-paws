/*jshint esversion: 6 */
const mongoose = require('mongoose');

// Food Schema
const healthcareSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
}, {
    collection: 'healthcare-collection'
});

module.exports = mongoose.model('Healthcare', healthcareSchema);