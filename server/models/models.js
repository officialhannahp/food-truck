const mongoose = require('mongoose');

    const ReviewSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "You must leave a name."],
            minlength: [2, "Your name must be at least 2 characters."]
        },
        review: {
            type: String,
            required: [true, "You must leave a review."],
            minlength: [10, "Review must be at least 10 charactaers."]
        },
        rating: {
            type: Number,
            required: [true, "You must leave a rating."],
            min: [1, "Rating cannot be less than 1 star."],
            max: [5, "Rating cannot be more than 5 stars."]
        }
    }, { timesTamps: true });



    const TruckSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Food truck name is required."],
            minlength: [5, "Name must be at least 5 characters."]
        },
        style: {
            type: String,
            required: [true, "Cuisine style is required."],
            minlength: [3, "Name must be at least 3 characters."]
        },
        desc: {
            type: String,
            required: [true, "Description is required."],
            minlength: [10, "Description must be at least 10 characters."]
        },
        reviews: [ReviewSchema]
    }, { timestamps: true });

    const Truck = mongoose.model("Truck", TruckSchema);

    module.exports = Truck;