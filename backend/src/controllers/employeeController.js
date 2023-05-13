import Employee from "../models/employeeModel.js";

export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    return res.status(200).json({ employees });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const addEmployee = async (req, res) => {
  try {
    const checkUser = await Employee.findOne({ eid: req.body.eid });
    console.log(checkUser);
    if (checkUser) {
      return res.status(400).json({
        message:
          "User with this ID already exists, Check in both Current employes and old employees",
      });
    } else {
      if (req.files.resumes) {
        req.body.resumes =
          "http://localhost:8000/resumes/" + req.files.resumes[0].filename;
      }
      if (req.files.image) {
        req.body.image =
          "http://localhost:8000/images/" + req.files.image[0].filename;
      }

      const employee = new Employee(req.body);

      const savedemployee = await employee.save();

      return res.status(200).json({ savedemployee });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    if (req.files.resumes) {
      req.body.resumes =
        "http://localhost:8000/resumes/" + req.files.resumes[0].filename;
    }
    if (req.files.image) {
      req.body.image =
        "http://localhost:8000/images/" + req.files.image[0].filename;
    }

    const user = await Employee.findOneAndUpdate(
      { eid: req.body.eid },
      req.body
    );

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const showOneEmployee = async (req, res) => {
  try {
    const user = await Employee.findOne({ eid: req.params.id });
    if (user) {
      return res.status(200).json({ user });
    } else {
      return res.status(400).json({ msg: "User Not Found" });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    console.log(req.params);
    const deletedemployee = await Employee.findOneAndDelete({
      eid: req.params.id,
    });
    console.log(deletedemployee);
    return res.status(200).json({ message: "deleted" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
