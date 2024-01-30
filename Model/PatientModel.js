const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  movieName: String,
  actorName: String,
  actressName: String,
  directorName: String,
  producerName: String,
  releasedYear: String,
  language: String,
  moviePosterImage: String,
});

var movieModel = mongoose.model("movies", movieSchema);
module.exports = { movieModel };
