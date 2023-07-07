
const FlightModel = require("../models/flight")
// const flightsRouter = require('./routes/flights');
const DestinationModel = require("..models/destination")
module.exports = {
    index,
    show,
    new: newFlight,
//    create
};

async function index(req, res) {
    const flights = await FlightModel.find({});
    console.log(flights)
    res.render('flights/index', { title: 'All Flights', flights:flights });
}

async function show(req, res) {
    try {
       const flightFromTheDatabase = await FlightModel
       .findById(req.params.id)
       .populate('')
       .exec();
       console.log(flightFromTheDatabase);
       res.render('flights/show', {
        title: "Flight Detail",
        flight: flightFromTheDatabase
       });
        } catch (err) {
            res.sent(err);
        }
    }

function newFlight (req, res) {
    res.render('flights/new', { title: 'Add Flight', errorMsg: ''});
}

// async function create(req, res) {


