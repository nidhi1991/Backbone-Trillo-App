App.Models.Card = Backbone.Model.extend({
  defaults: {
    description: '',
    completed: false
  },
  toggle: function(){
    this.save({ completed: !this.get('completed')});
  }
});
