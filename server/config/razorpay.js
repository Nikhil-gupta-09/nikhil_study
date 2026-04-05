const Razorpay = require("razorpay");
require("dotenv").config();

exports.instance = new Razorpay({
    key_id: "rzp_test_SYWhoephEiKmr8",     // Yahan RAZORPAY_KEY hona chahiye
    key_secret: "VREeVDjDytco1WcKfw47Cr8r",
    
});