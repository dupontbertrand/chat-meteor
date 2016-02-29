Messages= new Mongo.Collection('messages');

if (Meteor.isClient) {
  Template.hello.helpers({
    messages: function () {
      return Messages.find({});
    }
  });

Template.messages.events({
'keypress textarea': function(e, instance) {
  if (e.keyCode == 13) {
    var value = instance.find('textarea').value;
    instance.find('textarea').value = '';

    Messages.insert({
      message: value,
      timestamp: Naw Date(),
      user: Meteor.userId()
    });
  }
}
})
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
