const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Ajoutez du texte']
    },
    amount: {
        type: Number,
        required: [true, 'Ajoutez un nombre positif ou négatif']

    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);