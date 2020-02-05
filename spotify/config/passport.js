const passport = require("passport");
const SpotifyStrategy = require('passport-spotify').Strategy;
const User=require("../models/User")
// passport.serializeUser=(user, done)=>done(null, user);
// passport.deserializeUser=(obj, done)=>done(null, obj);


passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.IDTOKEN,
      clientSecret: process.env.IDSECRET,
      callbackURL: '/auth/spotify/callback'
    },
    async(accesToken,refreshToken, profile, done)=>{
      console.log("profile:",profile)
      console.log(accesToken)
      const user= await User.findOne( {spotifyID: profile.id})
      if(user){
        console.log(user)
        await User.findByIdAndUpdate(user._id, {currentToken:accesToken})
        return done(null,user);
        
      }
      const newUser= await User.create({
        spotifyID:profile.id,
        currentToken:accesToken
      })
        console.log(newUser)
        return done(null, newUser);
    }  
)
)


module.exports=passport;