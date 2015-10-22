// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // Puts song in the queue?
  enqueue: function () {
    this.trigger('enqueue', this);
  },

  // Takes song out of the queue?
  dequeue: function () {
    this.trigger('dequeue', this);
  },
  // Recognizes the song is over?
  ended: function () {
    this.trigger('ended', this);
  },

  play: function () {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  }

});
