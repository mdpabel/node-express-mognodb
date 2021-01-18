const express = require("express");
const multer = require("multer");

const router = express.Router();

const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
      return cb(
        new Error("Please provide valid format file like as jpg, jpeg, png")
      );
    }
    cb(undefined, true);
  },
});

router.post(
  "/uploads",
  upload.single("upload_image"),
  (req, res) => {
    res.send("SINGLE IMAGE");
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.post(
  "/uploads_array_of_image",
  upload.single("upload_image"),
  (req, res) => {
    res.send("ARRAY OF IMAGES");
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

module.exports = router;
