const Member = require('../models/Member');

// @desc    Get all members
// @route   GET /api/members
exports.getMembers = async (req, res, next) => {
  try {
    const members = await Member.find();

    return res.status(200).json({
      success: true,
      count: members.length,
      data: members
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

// @desc    Add Member
// @route   POST /api/members
exports.addMember = async (req, res, next) => {
  try {
    const { name } = req.body;

    const member = await Member.create(req.body);
  
    return res.status(201).json({
      success: true,
      data: member
    }); 
  } catch (err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}

