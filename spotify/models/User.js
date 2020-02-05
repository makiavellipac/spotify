const { model , Schema }=require("mongoose");
//const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    spotifyID:String,
    currentToken:String
  },
  {
    timestamps:true
  }
)

module.exports = model("User",userSchema);