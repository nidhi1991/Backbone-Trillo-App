// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require backboneLocalStorage
//= require handlebars
//= require_self
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./templates
//= require_tree .

window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Templates: {},
  initialize: function() {
    App.cards = new App.Collections.CardsCollection();
    App.cards.fetch({
      success: renderCards
    });
  }
};

$(function() {
  $('#new-card').on('click', '#new-card-button', addCard);
  App.initialize();
});

function renderCards() {
  var todoList = $('#todo-column').find('.card-list');
  var doneList = $('#done-column').find('.card-list');

  // clear off all the cards in boths lists
  todoList.empty();
  doneList.empty();

  // render all the cards
  App.cards.each(function(cardModel) {
    if (cardModel.get("completed")) {
      renderCompleted(cardModel);
    } else {
      renderTodo(cardModel);
    }
  });
}

function renderTodo(cardModel) {
  var todoList = $('#todo-column').find('.card-list');

  var view = new App.Views.CardView({model: cardModel});
  view.render();
  todoList.prepend(view.el);
}

function renderCompleted(cardModel) {
  var doneList = $('#done-column').find('.card-list');

  var view = new App.Views.CardView({model: cardModel});
  view.render();
  doneList.prepend(view.el);
}

function addCard() {
  var description = $('#new-card-text').val();
  $('#new-card-text').val('');

  var card = App.cards.create({description: description});
  renderTodo(card);
}
