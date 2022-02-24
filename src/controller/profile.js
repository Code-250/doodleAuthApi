const db = require("../database/models");

const { Profile } = db;

class ProfileController {
  static async completeProfile(req, res) {
    try {
      console.log(req.body, "===========");
      if (!req.body)
        return res.send({ message: "can not create a profil of empty fields" });
      const profileCreated = await Profile.create(req.body);
      res.send({
        message: "profile has been created successfully",
        data: profileCreated,
      });
    } catch (err) {
      res.send({ message: "something went wrong", err });
      console.log(err);
    }
  }
}

module.exports = ProfileController;
