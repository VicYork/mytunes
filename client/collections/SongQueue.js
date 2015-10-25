// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function () {
    //if (SongQueue.length === 1){
    //  this.playFirst();
    //}
    this.on('add', function() {
     //play the first song clicked
     //only if there is nothing else in the queue
     //create another function that does this?
    });
  },

  //Create a function that tells us if there are


  // added by vic. Doesn't do anything yet...
  playFirst: function () {
    //SongQueues.unshift(this.at(0));
    //this.get('songQueue').at(0).play();
    var newSong = this.get(this.at(0));
    console.log("--->");
    console.log(this.at(0));
    console.log("---<");
    this.model.setSong(newSong);
  }

});