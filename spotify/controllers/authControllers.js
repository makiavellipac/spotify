

exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

exports.home=(req,res)=>{
  res.redirect("/home")
}