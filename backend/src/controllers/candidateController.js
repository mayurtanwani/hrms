import Candidate from "../models/candidateModel.js";

export const getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    // if (candidates.length > 0) {
    return res.status(200).json({ candidates });
    // } else {
    //   return res.status(400).json({ msg: "No data found" });
    // }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const addCandidate = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      education,
      educationyear,
      email,
      technology,
      skills,
      recentemployer,
      portfoliolink,
      experience,
      status,
    } = req.body;

    if (req.files.resumes) {
      req.body.resumes =
        "http://localhost:8000/resumes/" + req.files.resumes[0].filename;
    }
    if (req.files.image) {
      req.body.image =
        "http://localhost:8000/images/" + req.files.image[0].filename;
    }

    // const firstname = req.body.firstname;
    // const lastname = req.body.lastname;
    // const education = req.body.education;
    // const educationyear = req.body.educationyear;
    // const email = req.body.email;
    // const image = req.body.image;
    // const technology = req.body.technology;
    // const resumes = req.body.resumes;
    // const skills = req.body.skills;
    // const recentemployer = req.body.recentemployer;
    // const portfoliolink = req.body.portfoliolink;
    // const experience = req.body.experience;

    const candidate = new Candidate({
      firstname,
      lastname,
      education,
      educationyear,
      technology,
      skills,
      recentemployer,
      portfoliolink,
      experience,
      email,
      status,
      image: req.body.image,
      resumes: req.body.resumes,
    });
    const savedcandidate = await candidate.save();
    return res.status(200).json({ savedcandidate });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const updateCandidate = async (req, res) => {
  try {
    if (req.files.resumes) {
      req.body.resumes =
        "http://localhost:8000/resumes/" + req.files.resumes[0].filename;
    }
    if (req.files.image) {
      req.body.image =
        "http://localhost:8000/images/" + req.files.image[0].filename;
    }

    console.log(req.body);

    const user = await Candidate.findOneAndUpdate(
      { email: req.body.email },
      req.body
    );
    console.log("user", user);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const deleteCandidate = async (req, res) => {
  try {
    console.log(req.params);
    const deletedcandidate = await Candidate.findOneAndDelete({
      email: req.params.id,
    });
    console.log(deletedcandidate);
    if (deletedcandidate) {
      const candidates = await Candidate.find();
      return res.status(200).json({ msg: "Successfully Deleted", candidates });
    } else {
      return res.status(400).json({ msg: "Candidate Not Found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
