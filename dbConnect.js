const { default: mongoose } = require("mongoose");

async function dbConnect() {
  try {
    const uri = `mongodb+srv://vaibhavsuke:xxx@cluster0.99kgr3r.mongodb.net/URL?retryWrites=true&w=majority`;
    const previousTime = new Date();
    await mongoose.connect(uri, {
      useNewUrlParser: true,
    });
    const currentTime = new Date();
    console.log(
      "connected to db in " +
        (currentTime.getTime() - previousTime.getTime()) +
        " ms"
    );
  } catch (e) {
    console.log(e); 
  }
}

module.exports = dbConnect;
