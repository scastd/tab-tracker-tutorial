module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT
  });

  Song.prototype.hola = function(params) {
    return params + 1;
  };

  return Song;
};

/*
{
 "title": "",
 "artist": "",
 "genre": "",
 "album": "",
 "albumImageUrl": "",
 "youtubeId": "",
 "lyrics": "",
 "tab": ""
}
 */
