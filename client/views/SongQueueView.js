// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagname: 'table',

  initialize: function () {
    this.render();
  },
  events: {
    'click': function () {
      console.log("clicked");
      this.model.enqueue();
      //this.model.play();
    }
  },

  render: function () {
    return this.$el;

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function (song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
