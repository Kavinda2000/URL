const express = require("express");
const { sendEmailController } = require("../controllers/sendEmailController");

//router object
const router = express.Router();

//routes
router.post("/api/v1/portfolio/sendEmail", sendEmailController);

// export
module.exports = router;