// renders individual card list item (li)
App.Views.CardView = Backbone.View.extend({
  tagName: 'li',
  className: 'card',
  render: function(){
    var cardData = this.model.toJSON()
    this.$el.html(this.template(cardData));
  },
  initialize: function(){
    this.template = HandlebarsTemplates['card'];
    this.listenTo(this.model, 'destroy', this.remove);
  },
  events: {
    'click .finish': 'finishCard',
    'click .delete': 'deleteCard',
  },
  finishCard: function() {
    this.model.toggle()
    renderCards([this.model]);
  },
  deleteCard: function() {
    this.model.destroy();
  }
});
