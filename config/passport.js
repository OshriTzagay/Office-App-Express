const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const users = require("../models/user-model");

const opt = {
  secretOrKey: process.env.SECRET_KEY,
};

opt.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opt, (payload, done) => {
      users.findById({ _id: payload.user._id }).then((result) => {
        console.log(payload.user.email,payload.user.password);
        if (result) return done(null, result);
        return done(null, false);
      })
      .catch(err=>done(err,false))
    })
  );
};
