const UrlService = require("../services/urlService/urlService");
class UrlController {
  static async apiGetRedirectUrl(req, res, next) {
    try {
      const newUrl = await UrlService.getShortenedUrl(req.body.originalUrl);

      if (!newUrl) {
        res.status(404).json("Error in shortening service");
      }
      console.log(newUrl);
      res.render("home",{id :newUrl});
    } catch (e) {
      res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
  }

  static async apiRedirectURI(req, res, next) {
    try {
      const shortId = req.params.shortId;
      const redirectUrl = await UrlService.getRedirectUrl(shortId);
      console.log(redirectUrl,"controller called")
      if (!redirectUrl) {
        console.log("see",redirectUrl)
        return
        // res.status(404).json("Error in redirecting service");
      }
      res.status(302).redirect(redirectUrl);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UrlController;
