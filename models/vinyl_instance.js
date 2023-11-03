const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VinylInstanceSchema = new Schema({
    artist: {type: Schema.ObjectId, ref: "Artist", required: true},
    vinyl: {type: Schema.ObjectId, ref: "Vinyl", required: true},
    status: {
        type: String,
        required: true,
        enum: ["Available", "Loaned", "Auction", "Sold"],
        default: "Available"
    },
    quantity: {type: Int16Array, required: true},
    price: {type: Float32Array, required: true},
})

VinylInstanceSchema.virtual("url").get(function() {
    return `catalog/copies/${this._id}`
});

module.exports = mongoose.model("Artist", VinylInstanceSchema);