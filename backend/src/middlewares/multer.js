import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "resumes") {
      cb(null, "resumes");
    } else if (file.fieldname === "image") {
      cb(null, "images");
    }
  },

  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

export default upload;
