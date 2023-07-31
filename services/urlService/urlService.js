const URL = require("../../models/url");
const BASE_URL = require("../../BASEURL.JS");
const { v4: uuidv4 } = require("uuid");

class UrlService {
  static async getShortenedUrl(originalUrl) {
    try {
      const newId = uuidv4().substr(0, 8);
        console.log(originalUrl)
      const newurl = new URL({
        shortId: BASE_URL + newId,
        redirectURL: originalUrl,
        visitHistory: [],
      });
      await newurl.save();

      return BASE_URL + "redirect/" + newId;
    } catch (e) {
      console.log(e);
    }
  }

  static async getRedirectUrl(shortId) {
    try {
      const user = await URL.findOne({ shortId: BASE_URL + shortId });
      console.log("service called",user)
      return user.redirectURL;
    } catch (err) {
      console.log("bcbc",err );
    }
  }
}

module.exports = UrlService;
