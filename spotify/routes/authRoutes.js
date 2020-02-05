const { Router } = require("express");
const passport = require("../config/passport");
const router = Router();

const {logout} = require("../controllers/authControllers")

router.get("/auth/spotify",passport.authenticate("spotify",{
  scope: ['user-read-email', 'user-top-read'],
  showDialog: true
}),
(req,res)=>{}
);
router.get("/auth/spotify/callback",
passport.authenticate("spotify",{
  successRedirect: "/profile",
  failureRedirect: "/"}
  ));

router.get("/logout",logout);

module.exports=router;