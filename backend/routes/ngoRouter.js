const express = require("express");
const router = express.Router();

const Ngo = require("../models/Ngo");

router.post("/add", (req, res) => {
	const data = new Ngo(req.body);
	data.save((err, data) => {
		if (err) {
			res.status(400).send({
				message: err,
			});
		} else {
			res.status(200).send({
				message: "Data added successfully",
			});
		}
	});
});

router.get("/all", (req, res) => {
	Ngo.find({}).exec((err, data) => {
		if (err) {
			res.status(400).send({
				message: err,
			});
		} else {
			res.status(200).send({
				message: "Success",
				data: data,
			});
		}
	});
});

module.exports = router;
