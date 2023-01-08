const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI || "mongodb+srv://LucentPay:Jy6ClI4eL4xU23ED@cluster0.5bg65am.mongodb.net/LucentPayUsers?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
