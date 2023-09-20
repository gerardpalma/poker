
const config = require('../config');

const CurrentTable = require('../models/CurrentTable');

// @route   POST api/users
// @desc    Register User
// @access  Public
exports.create = async (req, res) => {

  try {
    
    let name = "1"
    let currentTable = await User.findOne({ name });

    console.log("seatNumber", req.body)
    
    if(currentTable){
        res.status(400).json({
            errors: [
              {
                msg: 'Error',
              },
            ],
          });
    }
    currentTable = new CurrentTable({ 
        name: "1",
        tableNumber: "1",
        seatNumber: req.body.seatNumber });

    console.log(currentTable)

    await currentTable.save();
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};

exports.getAllCurrentTable = async (req, res) => {
    try {
       console.log("123123")
        let currentTable = await CurrentTable.findAll();
        return res.json({ currentTable })
    } catch (error) {
      console.error(err.message);
      return res.status(500).json({ msg: 'Internal server error' });
    }
}
