import Attendance from "../models/attendanceModel.js";
export const addAttendance = async (req, res) => {
  try {
    const datealreadyexist = await Attendance.find({ date: req.body[1].date });

    if (datealreadyexist.length >= req.body.length) {
      return res.status(400).json({ message: "date already exists" });
    }

    const entries = await Attendance.insertMany(req.body);

    return res.status(200).json({ entries });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const getAllAttendance = async (req, res) => {
  try {
    const allAttendance = await Attendance.find({});
    if (allAttendance) {
      return res.status(200).json({ allAttendance });
    } else {
      return res.status(400).json({ message: "some error occured" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
