const Truck = require('../models/models');
    module.exports = {
        //Create
        createTruck: (req, res) => {
            Truck.create(req.body)
            .then(truck => res.json({ message: "create success", results: truck }))
            .catch(err => res.json({ message: "create error", results: err }));
        },

        //Read
        getAllTrucks: (req, res) => {
            Truck.find()
                .then(trucks => res.json({ message: "find all success", results: trucks }))
                .catch(err => res.json({ message: "find all error", results: err }));
        },

        getOneTruck: (req, res) => {
            Truck.findById(req.params._id)
            .then(truck => res.json({ message: "find one success", results: truck }))
            .catch(err => res.json({ message: "find one error", results: err }));
        },

        //Update
        updateTruck: (req, res) => {
            Truck.findByIdAndUpdate(req.params._id, req.body, { new: true, runValidators: true })
            .then(truck => res.json({ message: "update success", results: truck }))
            .catch(err => res.json({ message: "update error", results: err }));
        },

        addReview: (req, res) => {
            // Truck.findByIdAndUpdate(req.params._id, { $push: { reviews: req.body } }, { new: true, runValidators: true })
            Truck.exists({ _id: req.params._id, "reviews.name": req.body.name })
            .then(exists => {
                if(exists) {
                    return Promise.reject("You cannot leave more than 1 review on this truck.");
                } else {
                    return Truck.findByIdAndUpdate(req.params._id, { $push: {reviews: req.body }}, { new: true, runValidators: true })
                }
            })
            .then(truck => res.json({ message: "review success", results: truck }))
            .catch(err => res.json({ message: "review error", results: err }));
        },
        
        //Delete
        deleteTruck: (req, res) => {
            Truck.findByIdAndDelete(req.params._id)
            .then(truck => res.json({ message: "delete success", results: truck }))
            .catch(err => res.json({ message: "delete error", results: err }));
        }
    }

