module.exports = {
  ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3003,
  URL: process.env.BASE_URL || "http://localhost:3003",
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb://restify_user:sda677H8fas#@ds015770.mlab.com:15770/order_queue_api"
};
