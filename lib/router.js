Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
  });

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
  name: 'postPage',
  //this.params to access the named parts of the route
  data: function() { return Posts.findOne(this.params._id); }
});
//route for new page
Router.route('/submit', {name: 'postSubmit'});
//this tells iron router that 404 is not just for invalid routes but also whenever the data function returns a falsy value:
Router.onBeforeAction('dataNotFound', {only: 'postPage'});