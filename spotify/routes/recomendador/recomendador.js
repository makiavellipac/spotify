const api="http://rossberto.pythonanywhere.com/"
const { Router } = require("express");
const router = Router();

const{
  createPlaylistByButton,
  createPlaylistBySong
}=(require("../../controllers(recomendador.controllers"))

router
  .get("/createPlayListByButton",createPlaylistByButton)
  .get("/createPlayListBySong",createPlaylistBySong)

module.exports=router;