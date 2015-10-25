// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  // initialize: function () {
  //   console.log("I was called");
  //   this.render();
  //   console.log("I was called");
  // },
  // render: function() {
  //   console.log("I was called");
  //  // return this.$el;
  // }


  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function () {
      console.log("clicked");
      this.model.play();
      this.model.enqueue();
    }
  },

  render: function () {
    return this.$el.html(this.template(this.model.attributes));
  }
});
