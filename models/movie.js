const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Поле "country" обязательно для заполнения'],
  },
  director: {
    type: String,
    required: [true, 'Поле "director" обязательно для заполнения'],
  },
  duration: {
    type: String,
    required: [true, 'Поле "duration" обязательно для заполнения'],
  },
  year: {
    type: String,
    required: [true, 'Поле "year" обязательно для заполнения'],
  },
  description: {
    type: String,
    required: [true, 'Поле "description" обязательно для заполнения'],
  },
  image: {
    type: String,
    required: [true, 'Поле "image" обязательно для заполнения'],
    validate: {
      validator(v) {
        return /^https?:\/\//.test(v);
      },
      message: 'Введите URL',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Поле "trailerLink" обязательно для заполнения'],
    validate: {
      validator(v) {
        return /^https?:\/\//.test(v);
      },
      message: 'Введите URL',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Поле "thumbnail" обязательно для заполнения'],
    validate: {
      validator(v) {
        return /^https?:\/\//.test(v);
      },
      message: 'Введите URL',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: [true, 'Поле "movieId" обязательно для заполнения'],
  },
  nameRU: {
    type: String,
    required: [true, 'Поле "nameRU" обязательно для заполнения'],
  },
  nameEN: {
    type: String,
    required: [true, 'Поле "nameEN" обязательно для заполнения'],
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);
