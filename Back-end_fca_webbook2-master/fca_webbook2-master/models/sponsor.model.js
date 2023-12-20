const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const sponsorSchema = new Schema({
    name: String,
    email: String,
    budget: String,
    animals: String
});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.sponsor, sponsorSchema);