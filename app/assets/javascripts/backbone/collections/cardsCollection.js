App.Collections.CardsCollection = Backbone.Collection.extend({
  model: App.Models.Card,
  url: '/cards',
  completed: function() {
    return this.filter(function( todo ) {
      return todo.get('completed');
    });
  },
  remaining: function() {
    return this.without.apply( this, this.completed() );
  }
});
