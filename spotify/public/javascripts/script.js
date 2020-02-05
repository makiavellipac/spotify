const User=require("../models/User")

document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

async function createPlayListBotton(){

  User.findOne( {spotifyID: "12137602278"})
  console.log(User)
  // const response= await axios.post("http://rossberto.pythonanywhere.com/profile",{
  //    Token:
  //  })
  //axios.post("http://rossberto.pythonanywhere.com/profile", {token: TOKEN}).then(response =>{
    //console.log(response);
  //})
}
const $button = document.getElementById("Token");
async()=>{
  $button.onclick = createPlayListBotton;
}

